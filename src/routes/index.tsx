import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { services } from "@/data/services";
import { Phone, Clock, MapPin, ShieldCheck, Star, ArrowRight, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-roofing.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Expert Roof Chimney & Gutters | Dublin's Trusted Roofing Experts" },
      {
        name: "description",
        content:
          "Dublin's 24/7 roofing, chimney and gutter specialists. Free quotes, fully insured, local team. Call +353 83 486 7879.",
      },
      { property: "og:title", content: "Expert Roof Chimney & Gutters | Dublin Roofing Experts" },
      { property: "og:description", content: "24/7 roofing, chimney and gutter specialists across Dublin." },
    ],
  }),
  component: HomePage,
});

const galleryImages = [work1, work2, work3, work4, work5, work6];
const blogPosts = [
  {
    slug: "spot-roof-damage-irish-winter",
    title: "How to Spot Roof Damage After an Irish Winter",
    excerpt:
      "Storms and freezing rain take their toll. Here's exactly what to look for once the weather clears.",
    image: blog1,
    date: "12 Mar 2025",
  },
  {
    slug: "epdm-vs-felt",
    title: "EPDM vs Felt Flat Roofing: Which Is Better?",
    excerpt: "We compare lifespan, cost and weather resistance to help you pick the right system.",
    image: blog2,
    date: "02 Feb 2025",
  },
  {
    slug: "gutter-cleaning-ireland",
    title: "Why Regular Gutter Cleaning Matters in Ireland",
    excerpt: "Blocked gutters are the silent cause of damp, rot and structural damage.",
    image: blog3,
    date: "18 Jan 2025",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section
        className="relative min-h-[88vh] flex items-center text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(125deg, oklch(0.18 0.03 250 / 0.92) 35%, oklch(0.18 0.03 250 / 0.45)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber/15 border border-amber/30 text-amber px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
              <Clock className="size-3.5" /> Open 24 Hours · Dublin
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-display font-bold uppercase leading-[0.95] text-balance">
              Dublin's Trusted <span className="text-amber">Roofing</span> Experts
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
              Roofing, chimneys, gutters and more — done right the first time. Local craftsmen,
              honest pricing, and a 24/7 emergency line for when the weather turns.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-amber text-navy-deep px-7 py-3.5 rounded-md font-bold uppercase tracking-wide shadow-amber hover:opacity-90 transition"
              >
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
              <a
                href="tel:+353834867879"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-md font-bold uppercase tracking-wide hover:bg-white hover:text-navy-deep transition"
              >
                <Phone className="size-4" /> +353 83 486 7879
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-sm text-white/75">
              <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-amber" /> Fully Insured</span>
              <span className="flex items-center gap-2"><Star className="size-4 text-amber" /> 4.0 Google Rating</span>
              <span className="flex items-center gap-2"><MapPin className="size-4 text-amber" /> Dublin & Surrounds</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber font-semibold uppercase tracking-widest text-sm">About Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-balance">
              Local Dublin Roofers You Can Actually Rely On
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Expert Roof Chimney & Gutters has been protecting Dublin homes for years with
              honest, high-quality workmanship. From a quick gutter clean to full roof
              replacements, our team treats every job — and every home — with the same care.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-7 text-navy-deep font-semibold border-b-2 border-amber pb-1 hover:text-amber transition"
            >
              Read More <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "10+", l: "Years Experience" },
              { v: "1000+", l: "Roofs Repaired" },
              { v: "24/7", l: "Emergency Cover" },
              { v: "100%", l: "Insured Work" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition"
              >
                <div className="text-4xl font-display font-bold text-amber">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber font-semibold uppercase tracking-widest text-sm">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-balance">
              Complete Roofing Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              From minor repairs to full installations — one trusted team for every job on your roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <article
                key={s.slug}
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.short}</p>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-1.5 mt-4 text-amber font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-navy-deep text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-white">
              Built On Trust, Backed By Experience
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, t: "24/7 Available", d: "Emergency call-outs day or night, weekends and holidays included." },
              { icon: Wrench, t: "Experienced Team", d: "Skilled tradesmen with years of practical Dublin roofing experience." },
              { icon: MapPin, t: "Dublin-Based", d: "Locally owned and operated — we know Irish weather and Irish homes." },
              { icon: ShieldCheck, t: "Free Quotes", d: "No-obligation surveys and fully transparent pricing on every job." },
            ].map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-amber/50 hover:bg-white/10 transition"
              >
                <div className="size-12 rounded-lg bg-gradient-amber grid place-items-center mb-5">
                  <Icon className="size-6 text-navy-deep" />
                </div>
                <h3 className="font-display font-bold text-lg">{t}</h3>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SNIPPET */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-amber font-semibold uppercase tracking-widest text-sm">Reviews</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">What Our Clients Say</h2>
            </div>
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 font-semibold text-navy-deep border-b-2 border-amber pb-1 hover:text-amber"
            >
              See All Reviews <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Sarah O'Connor", l: "Rathmines, Dublin", t: "Came out the same day for a leak after a storm. Fixed it perfectly and the price was very fair. Highly recommend." },
              { n: "Michael Byrne", l: "Drumcondra", t: "Brilliant team — replaced our flat roof with EPDM. Tidy job, no mess and finished a day ahead of schedule." },
              { n: "Aoife Murphy", l: "Clontarf", t: "Cleaned and repaired our gutters and replaced a few rotten fascia boards. Friendly lads, great work." },
            ].map((r) => (
              <div key={r.n} className="bg-card border border-border rounded-xl p-7 shadow-card">
                <div className="flex gap-1 text-amber mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed">"{r.t}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold">{r.n}</div>
                  <div className="text-sm text-muted-foreground">{r.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK SNIPPET */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-amber font-semibold uppercase tracking-widest text-sm">Our Work</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Recent Projects</h2>
            </div>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 font-semibold text-navy-deep border-b-2 border-amber pb-1 hover:text-amber"
            >
              View All Work <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg group">
                <img
                  src={img}
                  alt={`Recent project ${i + 1}`}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SNIPPET */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-amber font-semibold uppercase tracking-widest text-sm">From the Blog</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Roofing Insights</h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-semibold text-navy-deep border-b-2 border-amber pb-1 hover:text-amber"
            >
              Read More <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{p.date}</div>
                  <h3 className="font-display font-bold text-lg mt-2 group-hover:text-amber transition">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gradient-amber text-navy-deep">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase">
              Need a Roofer Today?
            </h2>
            <p className="mt-2 text-navy-deep/80 text-lg">
              Call us 24/7 — same-day response across Dublin.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+353834867879"
              className="inline-flex items-center gap-2 bg-navy-deep text-amber px-6 py-3.5 rounded-md font-bold uppercase tracking-wide hover:bg-navy transition"
            >
              <Phone className="size-4" /> +353 83 486 7879
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-navy-deep px-6 py-3.5 rounded-md font-bold uppercase tracking-wide hover:bg-white/90 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
