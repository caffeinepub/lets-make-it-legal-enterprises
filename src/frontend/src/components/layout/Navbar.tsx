import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Scale, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/legal-documents", label: "Legal Documents" },
  { to: "/legal-services", label: "Legal Services" },
  { to: "/law", label: "LAW" },
] as const;

type NavTo = (typeof navLinks)[number]["to"];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally close menu on pathname change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-scrolled" : "bg-navy"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center border border-gold/30 group-hover:bg-gold/30 transition-colors">
            <Scale className="w-5 h-5 text-gold" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-base font-bold text-white leading-tight block">
              Lets Make it Legal
            </span>
            <span className="text-gold text-xs font-body tracking-widest uppercase leading-none">
              Enterprises
            </span>
          </div>
          <div className="sm:hidden">
            <span className="font-display text-sm font-bold text-white">
              LMILE
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.to ||
              (link.to !== "/" && location.pathname.startsWith(link.to));
            return (
              <li key={link.to}>
                <Link
                  to={link.to as NavTo}
                  data-ocid="nav.link"
                  className={`px-4 py-2 rounded-md text-sm font-medium font-body transition-all duration-200 ${
                    isActive
                      ? "bg-gold/20 text-gold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            className="bg-gold hover:bg-gold/90 text-navy font-semibold font-body shadow-gold"
            asChild
          >
            <Link to="/legal-services" data-ocid="nav.primary_button">
              Get Consultation
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 py-4 px-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.to ||
                (link.to !== "/" && location.pathname.startsWith(link.to));
              return (
                <li key={link.to}>
                  <Link
                    to={link.to as NavTo}
                    data-ocid="nav.link"
                    className={`block px-4 py-3 rounded-md text-sm font-medium font-body transition-all ${
                      isActive
                        ? "bg-gold/20 text-gold"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 pt-2 border-t border-white/10">
              <Button
                size="sm"
                className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold font-body"
                asChild
              >
                <Link to="/legal-services">Get Consultation</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
