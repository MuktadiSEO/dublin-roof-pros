import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Facebook, Instagram, Mail } from "lucide-react";
import { services } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground border-t border-white/10">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="size-9 rounded-md bg-gradient-amber flex items-center justify-center font-bold text-navy-deep">
              ER
            </span>
            <span className="font-display font-bold uppercase tracking-wide">Expert Roof</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Dublin's trusted roofing, chimney and gutter specialists. Fully insured, locally based,
            available 24 hours.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="size-9 rounded-full bg-white/5 hover:bg-amber hover:text-navy-deep grid place-items-center transition"
              aria-label="Facebook"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="#"
              className="size-9 rounded-full bg-white/5 hover:bg-amber hover:text-navy-deep grid place-items-center transition"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="mailto:info@expertroof.ie"
              className="size-9 rounded-full bg-white/5 hover:bg-amber hover:text-navy-deep grid place-items-center transition"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-amber font-display uppercase text-sm tracking-widest mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-amber">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber">About Us</Link></li>
            <li><Link to="/services" className="hover:text-amber">Services</Link></li>
            <li><Link to="/our-work" className="hover:text-amber">Our Work</Link></li>
            <li><Link to="/blog" className="hover:text-amber">Blog</Link></li>
            <li><Link to="/testimonials" className="hover:text-amber">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-amber">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-amber font-display uppercase text-sm tracking-widest mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-amber"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-amber font-display uppercase text-sm tracking-widest mb-4">
            Get In Touch
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone className="size-4 mt-0.5 text-amber shrink-0" />
              <a href="tel:+353834867879" className="hover:text-amber font-semibold">
                +353 83 486 7879
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="size-4 mt-0.5 text-amber shrink-0" />
              Dublin & Surrounding Areas, Ireland
            </li>
            <li className="flex items-start gap-3">
              <Clock className="size-4 mt-0.5 text-amber shrink-0" />
              Open 24 Hours · 7 Days
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Expert Roof Chimney & Gutters. All rights reserved.
      </div>
    </footer>
  );
}
