import { Link } from "@tanstack/react-router";
import { ExternalLink, Mail, MapPin, Phone, Scale } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-navy text-white/80">
      {/* Gold divider */}
      <div className="h-px gold-gradient opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center border border-gold/30">
                <Scale className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="font-display text-sm font-bold text-white block leading-tight">
                  Lets Make it Legal
                </span>
                <span className="text-gold text-xs font-body tracking-widest uppercase">
                  Enterprises
                </span>
              </div>
            </div>
            <p className="text-sm font-body text-white/60 leading-relaxed">
              Your trusted legal partner for all documentation, compliance, and
              legal services across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/legal-documents", label: "Legal Documents" },
                { to: "/legal-services", label: "Legal Services" },
                { to: "/law", label: "LAW Study Notes" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-body text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "Passport & Visa",
                "Company Registration",
                "Trademark & IP",
                "Legal Drafting",
                "GST Registration",
                "ISO Certification",
              ].map((s) => (
                <li key={s} className="text-sm font-body text-white/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm font-body text-white/60 space-y-1">
                  <p>
                    44, Chimbai, Bandra West,
                    <br />
                    Mumbai — 400050
                  </p>
                  <p className="text-white/40 text-xs">
                    320, Christian Village, Opp. BMC Hospital,
                    <br />
                    Kurla West, Mumbai — 400070
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+918652311549"
                  className="text-sm font-body text-white/60 hover:text-gold transition-colors"
                >
                  +91 86523 11549 / 77388 11549
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:makeitlegal50@gmail.com"
                  className="text-sm font-body text-white/60 hover:text-gold transition-colors"
                >
                  makeitlegal50@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-white/40">
            © {currentYear} Lets Make it Legal Enterprises. All rights reserved.
          </p>
          <p className="text-xs font-body text-white/40">
            Built with ❤️ using{" "}
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              caffeine.ai
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
