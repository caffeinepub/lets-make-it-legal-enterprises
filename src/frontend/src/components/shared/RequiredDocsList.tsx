import { FileCheck } from "lucide-react";

interface RequiredDocsListProps {
  docs: string[];
}

export function RequiredDocsList({ docs }: RequiredDocsListProps) {
  return (
    <ul className="space-y-3">
      {docs.map((doc) => (
        <li key={doc} className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
            <FileCheck className="w-3.5 h-3.5 text-green-600" />
          </div>
          <span className="text-sm font-body text-foreground leading-relaxed">
            {doc}
          </span>
        </li>
      ))}
    </ul>
  );
}
