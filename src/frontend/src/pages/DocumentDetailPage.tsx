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
  Clock,
  CreditCard,
  FileText,
} from "lucide-react";
import { ProcessSteps } from "../components/shared/ProcessSteps";
import { RequiredDocsList } from "../components/shared/RequiredDocsList";
import { useGetDocumentById } from "../hooks/useQueries";

const categoryColors: Record<string, string> = {
  Identity: "bg-blue-50 text-blue-700 border-blue-200",
  Property: "bg-amber-50 text-amber-700 border-amber-200",
  Business: "bg-green-50 text-green-700 border-green-200",
  Education: "bg-purple-50 text-purple-700 border-purple-200",
  Other: "bg-gray-50 text-gray-700 border-gray-200",
};

export function DocumentDetailPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const docId = BigInt(id ?? "0");
  const { data: document, isLoading, error } = useGetDocumentById(docId);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-10">
          <Skeleton className="h-4 w-48 mb-8" />
          <Skeleton className="h-10 w-2/3 mb-4" />
          <Skeleton className="h-6 w-24 mb-6" />
          <Skeleton className="h-20 w-full mb-8" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !document) {
    return (
      <main className="min-h-screen bg-background pt-16 flex items-center justify-center">
        <div className="text-center p-8">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            Document Not Found
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            The document you're looking for doesn't exist or couldn't be loaded.
          </p>
          <Button asChild variant="outline">
            <Link to="/legal-documents">Back to Documents</Link>
          </Button>
        </div>
      </main>
    );
  }

  const categoryColor =
    categoryColors[document.category] || categoryColors.Other;

  return (
    <main
      className="min-h-screen bg-background pt-16"
      data-ocid="document.section"
    >
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
                    to="/legal-documents"
                    className="text-white/50 hover:text-white font-body text-sm"
                  >
                    Legal Documents
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gold font-body text-sm">
                  {document.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-wrap items-start gap-3 mb-4">
            <Badge variant="outline" className={`font-body ${categoryColor}`}>
              {document.category}
            </Badge>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {document.name}
          </h1>

          <p className="font-body text-white/65 text-base leading-relaxed max-w-2xl">
            {document.description}
          </p>

          {/* Info bar */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 bg-white/8 rounded-lg px-4 py-2 border border-white/10">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-sm font-body text-white/80">
                <span className="text-white/50 mr-1">Est. Time:</span>
                {document.estimatedTime}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/8 rounded-lg px-4 py-2 border border-white/10">
              <CreditCard className="w-4 h-4 text-gold" />
              <span className="text-sm font-body text-white/80">
                <span className="text-white/50 mr-1">Fees:</span>
                {document.feesInfo}
              </span>
            </div>
          </div>
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
            data-ocid="document.back_button"
          >
            <Link to="/legal-documents">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documents
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Process Steps */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-navy" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">
                Application Process
              </h2>
            </div>
            <ProcessSteps steps={document.processSteps} />
          </div>

          {/* Required Documents */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                <FileText className="w-4 h-4 text-green-600" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">
                Documents Required
              </h2>
            </div>
            <RequiredDocsList docs={document.requiredDocuments} />
          </div>
        </div>

        {/* Note box */}
        <div className="mt-8 p-5 rounded-xl bg-amber-50 border border-amber-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display text-sm font-semibold text-amber-800 mb-1">
                Important Note
              </h4>
              <p className="text-sm font-body text-amber-700 leading-relaxed">
                Document requirements and fees may vary by state or government
                updates. We recommend verifying with the relevant authority
                before applying. Our team can assist you throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
