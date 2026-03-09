import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle,
  Clock,
  FileText,
  Heart,
  Mail,
  MapPin,
  Phone,
  Scale,
  Shield,
  Star,
  Users,
} from "lucide-react";

const featureCards = [
  {
    icon: FileText,
    title: "Legal Documents",
    description:
      "Complete guidance on Passport, PAN Card, Aadhaar, GST, Domicile, Income Certificate, Marriage Certificate, and more — step-by-step processes with required document checklists.",
    to: "/legal-documents",
    color: "bg-blue-50 text-blue-600",
    cta: "Explore Documents",
  },
  {
    icon: Briefcase,
    title: "Legal Services",
    description:
      "Professional legal assistance for Affidavits, Legal Drafting, Trademark, ISO Certification, DSC, Copyright Registration, Company Formation, and all compliance matters.",
    to: "/legal-services",
    color: "bg-amber-50 text-amber-600",
    cta: "View Services",
  },
  {
    icon: BookOpen,
    title: "LAW — Study Notes",
    description:
      "Comprehensive study materials covering BNS 2023/2024/2025, IPC, Family Law, Constitution of India, procedural laws, and more — structured syllabus outlines and notes.",
    to: "/law",
    color: "bg-green-50 text-green-600",
    cta: "Start Learning",
  },
];

const trustIndicators = [
  {
    icon: Shield,
    title: "Trusted & Verified",
    description:
      "All services backed by qualified legal professionals with 10+ years of experience.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "Expedited handling with real-time status updates throughout the application journey.",
  },
  {
    icon: MapPin,
    title: "Mumbai-Based, India-Wide",
    description:
      "Based in Mumbai, serving clients across Maharashtra and all of India with offices in Bandra West & Kurla West.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "A dedicated team of 50+ legal experts, CAs, and consultants at your service.",
  },
];

const stats = [
  { value: "50,000+", label: "Documents Processed" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Success Rate" },
  { value: "500+", label: "Happy Clients/Month" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Small Business Owner, Delhi",
    text: "Got my company registered in just 7 days. The team was extremely helpful in guiding me through every step of the GST and trademark process.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Student, Mumbai",
    text: "The LAW study notes section is exceptional. The BNS 2023 notes helped me clear my bar exam. Very well organized syllabus!",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    role: "Retired Government Official, Hyderabad",
    text: "Passport renewal and domicile certificate — both handled smoothly. Clear process steps and document checklist saved me so much time.",
    rating: 5,
  },
];

export function HomePage() {
  return (
    <main>
      {/* ========== HERO ========== */}
      <section className="relative hero-gradient min-h-[92vh] flex items-center overflow-hidden">
        {/* Decorative elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-white/3 blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.9 0.08 75 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.08 75 / 0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-6">
                <Scale className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-body text-gold tracking-wider uppercase font-medium">
                  India's Trusted Legal Platform
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Your Trusted{" "}
                <span className="text-gold relative inline-block">
                  Legal Partner
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 gold-gradient opacity-60" />
                </span>
                <br />
                Across India
              </h1>

              {/* Proprietor byline */}
              <p className="text-sm font-body text-white/50 mb-2 tracking-wide">
                Led by{" "}
                <span className="text-gold/80 font-semibold">Mr. Sultan</span>,
                Proprietor
              </p>

              {/* Tagline trust badge */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Badge className="bg-gold/15 text-gold border border-gold/30 hover:bg-gold/20 font-body text-xs px-3 py-1 rounded-full">
                  <Heart className="w-3 h-3 mr-1.5 fill-gold text-gold" />
                  Expert, Loyal &amp; Work Done On Time
                </Badge>
                <Badge className="bg-white/8 text-white/70 border border-white/15 hover:bg-white/12 font-body text-xs px-3 py-1 rounded-full">
                  Specialized in Legal Documentation Camps
                </Badge>
              </div>

              <p className="text-lg font-body text-white/70 leading-relaxed mb-8 max-w-lg">
                From PAN Card to Company Registration, Legal Drafting to Law
                Studies — we simplify every legal process for individuals,
                businesses, and legal aspirants.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-navy font-semibold font-body shadow-gold text-base"
                  asChild
                >
                  <Link to="/legal-documents" data-ocid="hero.primary_button">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-body text-base"
                  asChild
                >
                  <Link to="/legal-services" data-ocid="hero.secondary_button">
                    Our Services
                  </Link>
                </Button>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl font-bold text-gold">
                      {stat.value}
                    </div>
                    <div className="text-xs font-body text-white/50 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Feature preview cards */}
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10" />
              <div className="relative p-6 space-y-3">
                {featureCards.map((card) => (
                  <Link
                    to={card.to}
                    key={card.to}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/8 border border-white/10 hover:bg-white/12 hover:border-gold/30 transition-all group"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${card.color} bg-opacity-20`}
                    >
                      <card.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-sm font-semibold text-white">
                        {card.title}
                      </div>
                      <div className="text-xs font-body text-white/50 mt-0.5">
                        {card.cta} →
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURE CARDS ========== */}
      <section className="py-20 bg-background section-divider" id="services">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything Legal, <span className="text-gold">In One Place</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Three powerful sections to serve all your legal needs — from
              government documents to professional legal services and law
              education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card) => (
              <Card
                key={card.to}
                className="group card-hover shadow-card border-border overflow-hidden"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${card.color} mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <Button
                    variant="outline"
                    className="group/btn border-navy/20 text-navy hover:bg-navy hover:text-white font-body w-full"
                    asChild
                  >
                    <Link to={card.to} data-ocid="nav.link">
                      {card.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Trusted by thousands of individuals and businesses across India
              for accurate, fast, and hassle-free legal services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((item) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-xl border border-border shadow-xs group hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/8 flex items-center justify-center mb-4 group-hover:bg-navy/15 transition-colors">
                  <item.icon className="w-6 h-6 text-navy" />
                </div>
                <h4 className="font-display text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="shadow-card border-border bg-card">
                <CardContent className="p-6">
                  <div
                    className="flex gap-1 mb-4"
                    aria-label={`${t.rating} stars`}
                  >
                    {Array.from(
                      { length: t.rating },
                      (_, i) => `star-${i}`,
                    ).map((k) => (
                      <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <div className="font-display text-sm font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-xs font-body text-muted-foreground mt-0.5">
                      {t.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-body text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Explore our comprehensive legal services or reach out for a free
            consultation with our expert team.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold font-body"
              asChild
            >
              <Link to="/legal-documents" data-ocid="cta.primary_button">
                <CheckCircle className="w-4 h-4 mr-2" />
                Browse Documents
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-body"
              asChild
            >
              <Link to="/law" data-ocid="cta.secondary_button">
                <BookOpen className="w-4 h-4 mr-2" />
                Study Law
              </Link>
            </Button>
          </div>

          {/* Contact block */}
          <div className="max-w-2xl mx-auto rounded-2xl border border-gold/20 bg-white/5 backdrop-blur-sm p-6">
            {/* VIP Home Service banner */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold text-navy text-xs font-bold font-body tracking-wide uppercase shadow-gold">
                <Heart className="w-3.5 h-3.5 fill-navy" />
                VIP Home Service Available — Schedule Your Appointment Now
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-left">
              <a
                href="tel:+918652311549"
                data-ocid="cta.primary_button"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/6 hover:bg-white/10 border border-white/10 hover:border-gold/30 transition-all group"
              >
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-body text-white/50 mb-0.5">
                    Call Us
                  </p>
                  <p className="text-sm font-body text-white font-medium group-hover:text-gold transition-colors">
                    +91 86523 11549
                  </p>
                  <p className="text-xs font-body text-white/50">
                    +91 77388 11549
                  </p>
                </div>
              </a>

              <a
                href="mailto:makeitlegal50@gmail.com"
                data-ocid="cta.secondary_button"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/6 hover:bg-white/10 border border-white/10 hover:border-gold/30 transition-all group"
              >
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-body text-white/50 mb-0.5">
                    Email Us
                  </p>
                  <p className="text-sm font-body text-white font-medium group-hover:text-gold transition-colors break-all">
                    makeitlegal50@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/6 border border-white/10">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xs font-body text-white/50 mb-0.5">
                    Find Us
                  </p>
                  <p className="text-sm font-body text-white font-medium">
                    Bandra West &amp; Kurla West
                  </p>
                  <p className="text-xs font-body text-white/50">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
