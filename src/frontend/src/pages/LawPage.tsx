import { BookOpen, FolderOpen } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { CategoryTabs } from "../components/shared/CategoryTabs";
import { LawCard } from "../components/shared/LawCard";
import { SearchBar } from "../components/shared/SearchBar";
import { SkeletonGrid } from "../components/shared/SkeletonCard";
import { useListStudyNotes, useSearchStudyNotes } from "../hooks/useQueries";

const LAW_CATEGORIES = [
  { value: "All", label: "All Subjects" },
  { value: "BNS", label: "BNS" },
  { value: "IPC", label: "IPC" },
  { value: "Constitution", label: "Constitution" },
  { value: "Family Law", label: "Family Law" },
  { value: "Procedure", label: "Procedure" },
  { value: "Evidence", label: "Evidence" },
];

export function LawPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
    // Simple debounce via timeout
    const timer = setTimeout(() => setDebouncedSearch(value), 300);
    return () => clearTimeout(timer);
  }, []);

  const { data: allNotes, isLoading: isLoadingAll } = useListStudyNotes();
  const { data: searchResults, isLoading: isSearching } =
    useSearchStudyNotes(debouncedSearch);

  const baseNotes = debouncedSearch.trim() ? searchResults : allNotes;
  const isLoading = debouncedSearch.trim() ? isSearching : isLoadingAll;

  const filtered = useMemo(() => {
    if (!baseNotes) return [];
    if (activeCategory === "All") return baseNotes;
    return baseNotes.filter((note) => note.subject === activeCategory);
  }, [baseNotes, activeCategory]);

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Page Header */}
      <section className="bg-navy py-14">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-gold" />
            </div>
            <div className="h-px flex-1 gold-gradient opacity-40" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            LAW — Study Notes & Syllabus
          </h1>
          <p className="font-body text-white/60 text-lg max-w-2xl">
            Comprehensive study materials for legal aspirants — BNS 2023, 2024 &
            2025, Indian Penal Code, Constitution of India, Family Law, BNSS,
            BSA, and more. Structured syllabus outlines and detailed notes.
          </p>

          {/* Subject highlights */}
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              "BNS 2023",
              "BNS 2024",
              "BNS 2025",
              "IPC",
              "Constitution",
              "Family Law",
              "BNSS",
              "BSA",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-body font-medium rounded-full bg-white/10 text-white/70 border border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-full sm:w-72">
              <SearchBar
                value={search}
                onChange={handleSearch}
                placeholder="Search topics..."
                dataOcid="law.search_input"
              />
            </div>
            <div className="flex-1">
              <CategoryTabs
                categories={LAW_CATEGORIES}
                active={activeCategory}
                onChange={setActiveCategory}
                tabOcidPrefix="law"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl py-10">
        {/* Results info */}
        {!isLoading && (
          <p className="text-sm font-body text-muted-foreground mb-6">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            topic{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in "${activeCategory}"`}
            {debouncedSearch && ` matching "${debouncedSearch}"`}
          </p>
        )}

        {/* Loading */}
        {isLoading && <SkeletonGrid count={6} />}

        {/* Empty state */}
        {!isLoading && filtered.length === 0 && (
          <div
            className="flex flex-col items-center justify-center py-16 text-center"
            data-ocid="law.empty_state"
          >
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
              <FolderOpen className="w-7 h-7 text-muted-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              No study notes found
            </h3>
            <p className="text-sm font-body text-muted-foreground">
              Try adjusting your search or subject filter.
            </p>
          </div>
        )}

        {/* Law Notes Grid */}
        {!isLoading && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((note, index) => (
              <LawCard key={note.id.toString()} note={note} index={index + 1} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
