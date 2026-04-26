import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/our-work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-deep text-primary-foreground border-b border-white/10">
      {/* Top bar */}
      <div className="hidden md:block bg-navy border-b border-white/5">
        <div className="container mx-auto px-4 flex items-center justify-between py-2 text-xs">
          <span className="text-white/70">Dublin & Surrounding Areas · Open 24 Hours</span>
          <a
            href="tel:+353834867879"
            className="flex items-center gap-2 text-amber hover:text-amber-bright font-semibold"
          >
            <Phone className="size-3.5" /> +353 83 486 7879
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display">
          <span className="size-9 rounded-md bg-gradient-amber flex items-center justify-center font-bold text-navy-deep">
            ER
          </span>
          <span className="leading-tight">
            <span className="block text-sm md:text-base font-bold uppercase tracking-wide">
              Expert Roof
            </span>
            <span className="block text-[10px] md:text-xs text-amber tracking-widest">
              CHIMNEY & GUTTERS
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="hover:text-amber transition-colors [&.active]:text-amber"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className="flex items-center gap-1 hover:text-amber transition-colors [&.active]:text-amber"
            >
              Services <ChevronDown className="size-3.5" />
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-3 w-72">
                <div className="bg-card text-card-foreground rounded-md shadow-elegant border border-border overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="block px-4 py-2.5 text-sm hover:bg-amber/10 hover:text-navy-deep border-b border-border last:border-0"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/our-work" className="hover:text-amber transition-colors [&.active]:text-amber">
            Our Work
          </Link>
          <Link to="/about" className="hover:text-amber transition-colors [&.active]:text-amber">
            About
          </Link>
          <Link to="/blog" className="hover:text-amber transition-colors [&.active]:text-amber">
            Blog
          </Link>
          <Link
            to="/testimonials"
            className="hover:text-amber transition-colors [&.active]:text-amber"
          >
            Testimonials
          </Link>
          <Link to="/contact" className="hover:text-amber transition-colors [&.active]:text-amber">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+353834867879"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-amber text-navy-deep px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition shadow-amber"
          >
            <Phone className="size-4" />
            <span className="hidden md:inline">+353 83 486 7879</span>
            <span className="md:hidden">Call</span>
          </a>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 border-b border-white/5 hover:text-amber"
              >
                {l.label}
              </Link>
            ))}
            <div className="py-2.5 border-b border-white/5">
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="block font-semibold text-amber mb-2"
              >
                Services
              </Link>
              <div className="pl-3 flex flex-col gap-1.5">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="text-white/80 text-sm py-1"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
