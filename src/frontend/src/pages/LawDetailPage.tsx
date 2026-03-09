import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  ChevronRight,
  FileText,
  List,
} from "lucide-react";
import { useGetStudyNoteById } from "../hooks/useQueries";

const subjectColors: Record<string, string> = {
  BNS: "bg-red-50 text-red-700 border-red-200",
  IPC: "bg-orange-50 text-orange-700 border-orange-200",
  Constitution: "bg-blue-50 text-blue-700 border-blue-200",
  "Family Law": "bg-pink-50 text-pink-700 border-pink-200",
  Procedure: "bg-teal-50 text-teal-700 border-teal-200",
  Evidence: "bg-purple-50 text-purple-700 border-purple-200",
};

interface NotesContentProps {
  content: string;
}

function NotesContent({ content }: NotesContentProps) {
  return (
    <div className="prose prose-sm max-w-none">
      {content.split("\n\n").map((paragraph, index) => {
        const key = `p-${index}`;
        if (paragraph.startsWith("## ")) {
          return (
            <h3
              key={key}
              className="font-display text-xl font-bold text-foreground mt-6 mb-3 first:mt-0"
            >
              {paragraph.replace("## ", "")}
            </h3>
          );
        }
        if (paragraph.startsWith("# ")) {
          return (
            <h2
              key={key}
              className="font-display text-2xl font-bold text-foreground mt-8 mb-4 first:mt-0"
            >
              {paragraph.replace("# ", "")}
            </h2>
          );
        }
        if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
          const items = paragraph.split("\n").filter(Boolean);
          return (
            <ul key={key} className="space-y-1 my-4 ml-4">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-sm font-body text-foreground leading-relaxed flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span>{item.replace(/^[*-]\s+/, "")}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={key}
            className="text-sm font-body text-foreground leading-relaxed mb-4"
          >
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}

export function LawDetailPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const noteId = BigInt(id ?? "0");
  const { data: note, isLoading, error } = useGetStudyNoteById(noteId);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-10">
          <Skeleton className="h-4 w-48 mb-8" />
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-6 w-24 mb-6" />
          <Skeleton className="h-24 w-full mb-8" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !note) {
    return (
      <main className="min-h-screen bg-background pt-16 flex items-center justify-center">
        <div className="text-center p-8">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            Study Note Not Found
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            The study note you're looking for doesn't exist or couldn't be
            loaded.
          </p>
          <Button asChild variant="outline">
            <Link to="/law">Back to LAW</Link>
          </Button>
        </div>
      </main>
    );
  }

  const subjectColor =
    subjectColors[note.subject] || "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <main className="min-h-screen bg-background pt-16" data-ocid="law.section">
      {/* Header */}
      <section className="bg-navy py-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to="/"
                    className="text-white/50 hover:text-white font-body text-sm"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to="/law"
                    className="text-white/50 hover:text-white font-body text-sm"
                  >
                    LAW
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gold font-body text-sm">
                  {note.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-wrap items-start gap-3 mb-4">
            <Badge variant="outline" className={`font-body ${subjectColor}`}>
              {note.subject}
            </Badge>
            <Badge
              variant="outline"
              className="font-body bg-white/10 text-white/70 border-white/20"
            >
              Study Notes
            </Badge>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {note.title}
          </h1>

          <p className="font-body text-white/65 text-base leading-relaxed max-w-2xl">
            {note.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl py-10">
        <div className="mb-8">
          <Button
            variant="outline"
            size="sm"
            className="border-navy/20 text-navy hover:bg-navy hover:text-white font-body"
            asChild
            data-ocid="law.back_button"
          >
            <Link to="/law">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to LAW
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Syllabus Outline */}
          <div
            className="bg-card rounded-xl border border-border p-6 shadow-card"
            data-ocid="law.panel"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center">
                <List className="w-4 h-4 text-navy" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">
                Syllabus Outline
              </h2>
            </div>
            <ul className="space-y-2">
              {note.syllabusOutline.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm font-body text-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-navy">
                      {index + 1}
                    </span>
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Sections */}
          <div
            className="bg-card rounded-xl border border-border p-6 shadow-card"
            data-ocid="law.panel"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-amber-600" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">
                Key Sections & Provisions
              </h2>
            </div>
            <ul className="space-y-2">
              {note.keySections.map((section) => (
                <li
                  key={section}
                  className="flex items-start gap-2 text-sm font-body"
                >
                  <ChevronRight className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">
                    {section}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Study Notes Content */}
        <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
          <div className="flex items-center gap-3 p-6 border-b border-border bg-muted/30">
            <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-navy" />
            </div>
            <h2 className="font-display text-lg font-bold text-foreground">
              Study Notes
            </h2>
          </div>
          <div className="p-6 sm:p-8">
            <NotesContent content={note.notesContent} />
          </div>
        </div>

        {/* Navigation hint */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center p-5 rounded-xl bg-muted/50 border border-border">
          <p className="text-sm font-body text-muted-foreground">
            Want to explore more legal topics?
          </p>
          <Button
            variant="outline"
            size="sm"
            className="border-navy/20 text-navy hover:bg-navy hover:text-white font-body"
            asChild
          >
            <Link to="/law">
              <BookOpen className="w-4 h-4 mr-2" />
              Browse All Topics
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
