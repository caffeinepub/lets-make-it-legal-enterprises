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
import { ArrowRight, BookOpen } from "lucide-react";
import type { StudyNote } from "../../hooks/useQueries";

interface LawCardProps {
  note: StudyNote;
  index: number;
}

const subjectColors: Record<string, string> = {
  BNS: "bg-red-50 text-red-700 border-red-200",
  IPC: "bg-orange-50 text-orange-700 border-orange-200",
  Constitution: "bg-blue-50 text-blue-700 border-blue-200",
  "Family Law": "bg-pink-50 text-pink-700 border-pink-200",
  Procedure: "bg-teal-50 text-teal-700 border-teal-200",
  Evidence: "bg-purple-50 text-purple-700 border-purple-200",
};

export function LawCard({ note, index }: LawCardProps) {
  const colorClass =
    subjectColors[note.subject] || "bg-gray-50 text-gray-700 border-gray-200";

  const previewItems = note.syllabusOutline.slice(0, 2);
  const extraCount = note.syllabusOutline.length - 2;

  return (
    <Card
      className="group card-hover shadow-card border-border bg-card overflow-hidden"
      data-ocid={`law.item.${index}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge
            variant="outline"
            className={`text-xs font-body font-medium ${colorClass}`}
          >
            {note.subject}
          </Badge>
          <BookOpen className="w-4 h-4 text-muted-foreground" />
        </div>
        <CardTitle className="font-display text-lg text-foreground group-hover:text-navy transition-colors line-clamp-2">
          {note.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3">
          {note.description}
        </p>
        {previewItems.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {previewItems.map((item) => (
              <span
                key={item}
                className="text-xs font-body px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
              >
                {item}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="text-xs font-body px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                +{extraCount} more
              </span>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn border-navy/20 text-navy hover:bg-navy hover:text-white font-body transition-all"
          asChild
        >
          <Link to="/law/$id" params={{ id: note.id.toString() }}>
            Study Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
