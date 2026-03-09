import { useQuery } from "@tanstack/react-query";
import type { Document, Service, StudyNote } from "../backend.d.ts";
import { useActor } from "./useActor";

export type { Document, Service, StudyNote };

export function useListDocuments() {
  const { actor, isFetching } = useActor();
  return useQuery<Document[]>({
    queryKey: ["documents"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listDocuments();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFilterDocumentsByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Document[]>({
    queryKey: ["documents", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      if (category === "All") return actor.listDocuments();
      return actor.filterDocumentsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetDocumentById(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<Document | null>({
    queryKey: ["document", id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getDocumentById(id);
    },
    enabled: !!actor && !isFetching,
  });
}

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

export function useListStudyNotes() {
  const { actor, isFetching } = useActor();
  return useQuery<StudyNote[]>({
    queryKey: ["studyNotes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listStudyNotes();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchStudyNotes(keyword: string) {
  const { actor, isFetching } = useActor();
  return useQuery<StudyNote[]>({
    queryKey: ["studyNotes", "search", keyword],
    queryFn: async () => {
      if (!actor) return [];
      if (!keyword.trim()) return actor.listStudyNotes();
      return actor.searchStudyNotesByKeyword(keyword);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetStudyNoteById(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<StudyNote | null>({
    queryKey: ["studyNote", id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getStudyNoteById(id);
    },
    enabled: !!actor && !isFetching,
  });
}
