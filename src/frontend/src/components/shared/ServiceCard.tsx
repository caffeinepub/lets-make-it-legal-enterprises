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
import type { Service } from "../../hooks/useQueries";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const categoryColors: Record<string, string> = {
  Corporate: "bg-blue-50 text-blue-700 border-blue-200",
  "Intellectual Property": "bg-violet-50 text-violet-700 border-violet-200",
  Documentation: "bg-amber-50 text-amber-700 border-amber-200",
  Compliance: "bg-green-50 text-green-700 border-green-200",
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const colorClass =
    categoryColors[service.category] ||
    "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <Card
      className="group card-hover shadow-card border-border bg-card overflow-hidden"
      data-ocid={`services.item.${index}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge
            variant="outline"
            className={`text-xs font-body font-medium ${colorClass}`}
          >
            {service.category}
          </Badge>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs font-body">{service.timeline}</span>
          </div>
        </div>
        <CardTitle className="font-display text-lg text-foreground group-hover:text-navy transition-colors line-clamp-2">
          {service.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm font-body text-muted-foreground leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn border-navy/20 text-navy hover:bg-navy hover:text-white font-body transition-all"
          asChild
        >
          <Link to="/legal-services/$id" params={{ id: service.id.toString() }}>
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
