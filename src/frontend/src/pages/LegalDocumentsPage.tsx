import { FileText, FolderOpen } from "lucide-react";
import { useMemo, useState } from "react";
import { CategoryTabs } from "../components/shared/CategoryTabs";
import { DocumentCard } from "../components/shared/DocumentCard";
import { SearchBar } from "../components/shared/SearchBar";
import { SkeletonGrid } from "../components/shared/SkeletonCard";
import { useListDocuments } from "../hooks/useQueries";

const DOCUMENT_CATEGORIES = [
  { value: "All", label: "All Documents" },
  { value: "Identity", label: "Identity" },
  { value: "Property", label: "Property" },
  { value: "Business", label: "Business" },
  { value: "Education", label: "Education" },
  { value: "Other", label: "Other" },
];

export function LegalDocumentsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: documents, isLoading, error } = useListDocuments();

  const filtered = useMemo(() => {
    if (!documents) return [];
    return documents.filter((doc) => {
      const matchesCategory =
        activeCategory === "All" || doc.category === activeCategory;
      const matchesSearch =
        !search ||
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [documents, activeCategory, search]);

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Page Header */}
      <section className="bg-navy py-14">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-gold" />
            </div>
            <div className="h-px flex-1 gold-gradient opacity-40" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Legal Documents
          </h1>
          <p className="font-body text-white/60 text-lg max-w-2xl">
            Step-by-step guides for all Indian government documents — from
            Passport and PAN Card to GST Registration and Marriage Certificate.
            Find the process and required documents for each.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-full sm:w-72">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search documents..."
                dataOcid="documents.search_input"
              />
            </div>
            <div className="flex-1">
              <CategoryTabs
                categories={DOCUMENT_CATEGORIES}
                active={activeCategory}
                onChange={setActiveCategory}
                tabOcidPrefix="documents"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl py-10">
        {/* Results info */}
        {!isLoading && !error && (
          <p className="text-sm font-body text-muted-foreground mb-6">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            document{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in "${activeCategory}"`}
            {search && ` matching "${search}"`}
          </p>
        )}

        {/* Loading */}
        {isLoading && <SkeletonGrid count={6} />}

        {/* Error */}
        {error && (
          <div
            className="flex flex-col items-center justify-center py-16 text-center"
            data-ocid="documents.error_state"
          >
            <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Unable to load documents
            </h3>
            <p className="text-sm font-body text-muted-foreground">
              Please try refreshing the page.
            </p>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !error && filtered.length === 0 && (
          <div
            className="flex flex-col items-center justify-center py-16 text-center"
            data-ocid="documents.empty_state"
          >
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
              <FolderOpen className="w-7 h-7 text-muted-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              No documents found
            </h3>
            <p className="text-sm font-body text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Document Grid */}
        {!isLoading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((doc, index) => (
              <DocumentCard
                key={doc.id.toString()}
                document={doc}
                index={index + 1}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
