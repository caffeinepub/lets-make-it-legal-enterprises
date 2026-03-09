import { useQuery } from "@tanstack/react-query";
import type { Document, Service, StudyNote } from "../backend.d.ts";
import {
  STATIC_DOCUMENTS,
  STATIC_STUDY_NOTES,
  type StaticDocument,
  type StaticStudyNote,
} from "../data/staticData";
import { useActor } from "./useActor";

export type { Document, Service, StudyNote };

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Cast a StaticDocument to the backend Document shape.
 * Both share identical fields so this is a safe identity cast.
 */
function toDocument(d: StaticDocument): Document {
  return d as unknown as Document;
}

/**
 * Cast a StaticStudyNote to the backend StudyNote shape.
 */
function toStudyNote(n: StaticStudyNote): StudyNote {
  return n as unknown as StudyNote;
}

/** Search static study notes by keyword (case-insensitive). */
function searchStatic(keyword: string): StudyNote[] {
  const kw = keyword.toLowerCase().trim();
  if (!kw) return STATIC_STUDY_NOTES.map(toStudyNote);
  return STATIC_STUDY_NOTES.filter(
    (n) =>
      n.title.toLowerCase().includes(kw) ||
      n.subject.toLowerCase().includes(kw) ||
      n.description.toLowerCase().includes(kw) ||
      n.notesContent.toLowerCase().includes(kw) ||
      n.syllabusOutline.some((s) => s.toLowerCase().includes(kw)) ||
      n.keySections.some((s) => s.toLowerCase().includes(kw)),
  ).map(toStudyNote);
}

// ─── Document Hooks ───────────────────────────────────────────────────────────

export function useListDocuments() {
  const { actor, isFetching } = useActor();
  return useQuery<Document[]>({
    queryKey: ["documents"],
    queryFn: async () => {
      if (!actor) return STATIC_DOCUMENTS.map(toDocument);
      const backendData = await actor.listDocuments();
      // Use static data when backend has minimal/no seed data
      if (backendData.length <= 2) {
        return STATIC_DOCUMENTS.map(toDocument);
      }
      return backendData;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFilterDocumentsByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Document[]>({
    queryKey: ["documents", "category", category],
    queryFn: async () => {
      if (!actor) {
        const all = STATIC_DOCUMENTS.map(toDocument);
        return category === "All"
          ? all
          : all.filter((d) => d.category === category);
      }
      const backendData =
        category === "All"
          ? await actor.listDocuments()
          : await actor.filterDocumentsByCategory(category);

      if (backendData.length <= 2) {
        const all = STATIC_DOCUMENTS.map(toDocument);
        return category === "All"
          ? all
          : all.filter((d) => d.category === category);
      }
      return backendData;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetDocumentById(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<Document | null>({
    queryKey: ["document", id.toString()],
    queryFn: async () => {
      // First try static data lookup (always available)
      const staticMatch = STATIC_DOCUMENTS.find((d) => d.id === id);

      if (!actor) return staticMatch ? toDocument(staticMatch) : null;

      try {
        const result = await actor.getDocumentById(id);
        // If backend returns a valid document with name, use it; otherwise fall back to static
        if (result && "name" in result && result.name) return result;
      } catch {
        // Backend lookup failed — fall through to static
      }

      return staticMatch ? toDocument(staticMatch) : null;
    },
    enabled: !!actor && !isFetching,
  });
}

// ─── Service Hooks ────────────────────────────────────────────────────────────

export function useListServices() {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFilterServicesByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      if (category === "All") return actor.listServices();
      return actor.filterServicesByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetServiceById(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<Service | null>({
    queryKey: ["service", id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getServiceById(id);
    },
    enabled: !!actor && !isFetching,
  });
}

// ─── Study Note Hooks ─────────────────────────────────────────────────────────

export function useListStudyNotes() {
  const { actor, isFetching } = useActor();
  return useQuery<StudyNote[]>({
    queryKey: ["studyNotes"],
    queryFn: async () => {
      if (!actor) return STATIC_STUDY_NOTES.map(toStudyNote);
      const backendData = await actor.listStudyNotes();
      if (backendData.length <= 2) {
        return STATIC_STUDY_NOTES.map(toStudyNote);
      }
      return backendData;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchStudyNotes(keyword: string) {
  const { actor, isFetching } = useActor();
  return useQuery<StudyNote[]>({
    queryKey: ["studyNotes", "search", keyword],
    queryFn: async () => {
      if (!actor) return searchStatic(keyword);

      if (!keyword.trim()) {
        const backendData = await actor.listStudyNotes();
        if (backendData.length <= 2) return STATIC_STUDY_NOTES.map(toStudyNote);
        return backendData;
      }

      const backendData = await actor.searchStudyNotesByKeyword(keyword);
      if (backendData.length <= 2) {
        return searchStatic(keyword);
      }
      return backendData;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetStudyNoteById(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<StudyNote | null>({
    queryKey: ["studyNote", id.toString()],
    queryFn: async () => {
      // First check static data (always available and complete)
      const staticMatch = STATIC_STUDY_NOTES.find((n) => n.id === id);

      if (!actor) return staticMatch ? toStudyNote(staticMatch) : null;

      try {
        const result = await actor.getStudyNoteById(id);
        // If backend returns a valid note with title, use it; otherwise fall back to static
        if (result && "title" in result && result.title) return result;
      } catch {
        // Backend lookup failed — fall through to static
      }

      return staticMatch ? toStudyNote(staticMatch) : null;
    },
    enabled: !!actor && !isFetching,
  });
}
