import { Briefcase, FolderOpen } from "lucide-react";
import { useMemo, useState } from "react";
import { CategoryTabs } from "../components/shared/CategoryTabs";
import { SearchBar } from "../components/shared/SearchBar";
import { ServiceCard } from "../components/shared/ServiceCard";
import { SkeletonGrid } from "../components/shared/SkeletonCard";
import { useListServices } from "../hooks/useQueries";

const SERVICE_CATEGORIES = [
  { value: "All", label: "All Services" },
  { value: "Corporate", label: "Corporate" },
  { value: "Intellectual Property", label: "IP & Trademark" },
  { value: "Documentation", label: "Documentation" },
  { value: "Compliance", label: "Compliance" },
];

export function LegalServicesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: services, isLoading, error } = useListServices();

  const filtered = useMemo(() => {
    if (!services) return [];
    return services.filter((svc) => {
      const matchesCategory =
        activeCategory === "All" || svc.category === activeCategory;
      const matchesSearch =
        !search ||
        svc.name.toLowerCase().includes(search.toLowerCase()) ||
        svc.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [services, activeCategory, search]);

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Page Header */}
      <section className="bg-navy py-14">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-gold" />
            </div>
            <div className="h-px flex-1 gold-gradient opacity-40" />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Legal Services
          </h1>
          <p className="font-body text-white/60 text-lg max-w-2xl">
            Professional legal assistance for all your business and personal
            legal needs — Affidavits, Trademark, Company Registration, DSC, ISO,
            Copyright, and more.
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
                placeholder="Search services..."
                dataOcid="services.search_input"
              />
            </div>
            <div className="flex-1">
              <CategoryTabs
                categories={SERVICE_CATEGORIES}
                active={activeCategory}
                onChange={setActiveCategory}
                tabOcidPrefix="services"
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
            service{filtered.length !== 1 ? "s" : ""}
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
            data-ocid="services.error_state"
          >
            <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <Briefcase className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Unable to load services
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
            data-ocid="services.empty_state"
          >
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
              <FolderOpen className="w-7 h-7 text-muted-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              No services found
            </h3>
            <p className="text-sm font-body text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Services Grid */}
        {!isLoading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((svc, index) => (
              <ServiceCard
                key={svc.id.toString()}
                service={svc}
                index={index + 1}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
