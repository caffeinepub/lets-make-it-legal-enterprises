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
  Briefcase,
  Clock,
  DollarSign,
} from "lucide-react";
import { ProcessSteps } from "../components/shared/ProcessSteps";
import { RequiredDocsList } from "../components/shared/RequiredDocsList";
import { useGetServiceById } from "../hooks/useQueries";

const categoryColors: Record<string, string> = {
  Corporate: "bg-blue-50 text-blue-700 border-blue-200",
  "Intellectual Property": "bg-violet-50 text-violet-700 border-violet-200",
  Documentation: "bg-amber-50 text-amber-700 border-amber-200",
  Compliance: "bg-green-50 text-green-700 border-green-200",
};

export function ServiceDetailPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const serviceId = BigInt(id ?? "0");
  const { data: service, isLoading, error } = useGetServiceById(serviceId);

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
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !service) {
    return (
      <main className="min-h-screen bg-background pt-16 flex items-center justify-center">
        <div className="text-center p-8">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            Service Not Found
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            The service you're looking for doesn't exist or couldn't be loaded.
          </p>
          <Button asChild variant="outline">
            <Link to="/legal-services">Back to Services</Link>
          </Button>
        </div>
      </main>
    );
  }

  const categoryColor =
    categoryColors[service.category] ||
    "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <main
      className="min-h-screen bg-background pt-16"
      data-ocid="service.section"
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
                    to="/legal-services"
                    className="text-white/50 hover:text-white font-body text-sm"
                  >
                    Legal Services
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/30" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gold font-body text-sm">
                  {service.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-wrap items-start gap-3 mb-4">
            <Badge variant="outline" className={`font-body ${categoryColor}`}>
              {service.category}
            </Badge>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {service.name}
          </h1>

          <p className="font-body text-white/65 text-base leading-relaxed max-w-2xl">
            {service.description}
          </p>

          {/* Info bar */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 bg-white/8 rounded-lg px-4 py-2 border border-white/10">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-sm font-body text-white/80">
                <span className="text-white/50 mr-1">Timeline:</span>
                {service.timeline}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/8 rounded-lg px-4 py-2 border border-white/10">
              <DollarSign className="w-4 h-4 text-gold" />
              <span className="text-sm font-body text-white/80">
                <span className="text-white/50 mr-1">Pricing:</span>
                {service.pricingInfo}
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
            data-ocid="service.back_button"
          >
            <Link to="/legal-services">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Process Steps */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-navy" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">
                Our Process
              </h2>
            </div>
            <ProcessSteps steps={service.processSteps} />
          </div>

          {/* Required Documents */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-green-600" />
              </div>
              <h2 className="font-display text-lg font-bold text-foreground">
                Documents Required
              </h2>
            </div>
            <RequiredDocsList docs={service.requiredDocuments} />
          </div>
        </div>

        {/* CTA box */}
        <div className="mt-8 p-6 rounded-xl hero-gradient text-white">
          <h3 className="font-display text-xl font-bold mb-2">
            Ready to Proceed?
          </h3>
          <p className="font-body text-white/70 text-sm mb-4">
            Our expert team is ready to assist you with {service.name}. Contact
            us for a free consultation and we'll guide you through every step.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              size="sm"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold font-body"
            >
              Get Free Consultation
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-body"
              asChild
            >
              <Link to="/legal-services">Browse More Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
