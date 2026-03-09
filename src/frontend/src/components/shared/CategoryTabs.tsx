interface Category {
  value: string;
  label: string;
}

interface CategoryTabsProps {
  categories: Category[];
  active: string;
  onChange: (value: string) => void;
  tabOcidPrefix?: string;
}

export function CategoryTabs({
  categories,
  active,
  onChange,
  tabOcidPrefix = "filter",
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          type="button"
          key={cat.value}
          onClick={() => onChange(cat.value)}
          data-ocid={`${tabOcidPrefix}.tab`}
          className={`px-4 py-2 rounded-full text-sm font-medium font-body transition-all duration-200 border ${
            active === cat.value
              ? "bg-navy text-white border-navy shadow-sm"
              : "bg-background text-muted-foreground border-border hover:border-navy/40 hover:text-foreground"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
