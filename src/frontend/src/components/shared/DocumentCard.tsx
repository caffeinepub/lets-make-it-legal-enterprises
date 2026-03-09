import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import type { Document } from "../../hooks/useQueries";

interface DocumentCardProps {
  document: Document;
  index: number;
}

const categoryColors: Record<string, string> = {
  Identity: "bg-blue-50 text-blue-700 border-blue-200",
  Property: "bg-amber-50 text-amber-700 border-amber-200",
  Business: "bg-green-50 text-green-700 border-green-200",
  Education: "bg-purple-50 text-purple-700 border-purple-200",
  Other: "bg-gray-50 text-gray-700 border-gray-200",
};

export function DocumentCard({ document, index }: DocumentCardProps) {
  const colorClass = categoryColors[document.category] || categoryColors.Other;

  return (
    <Card
      className="group card-hover shadow-card border-border bg-card overflow-hidden"
      data-ocid={`documents.item.${index}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge
            variant="outline"
            className={`text-xs font-body font-medium ${colorClass}`}
          >
            {document.category}
          </Badge>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs font-body">{document.estimatedTime}</span>
          </div>
        </div>
        <CardTitle className="font-display text-lg text-foreground group-hover:text-navy transition-colors line-clamp-2">
          {document.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3">
          {document.description}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn border-navy/20 text-navy hover:bg-navy hover:text-white font-body transition-all"
          asChild
        >
          <Link
            to="/legal-documents/$id"
            params={{ id: document.id.toString() }}
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
