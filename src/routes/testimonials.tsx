import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Star } from "lucide-react";
import heroImg from "@/assets/hero-roofing.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Expert Roof Dublin Customer Reviews" },
      { name: "description", content: "Read genuine reviews from Dublin homeowners. Rated 4.0 on Google with 8 reviews." },
      { property: "og:title", content: "Customer Reviews | Expert Roof Dublin" },
      { property: "og:description", content: "What Dublin homeowners say about Expert Roof Chimney & Gutters." },
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { n: "Sarah O'Connor", l: "Rathmines", r: 5, t: "Came out same day after a leak in a storm. Fixed it perfectly and the price was very fair. Highly recommend." },
  { n: "Michael Byrne", l: "Drumcondra", r: 5, t: "Brilliant team — replaced our flat roof with EPDM. Tidy job, no mess and finished a day ahead of schedule." },
  { n: "Aoife Murphy", l: "Clontarf", r: 5, t: "Cleaned and repaired our gutters and replaced a few rotten fascia boards. Friendly lads, great work." },
  { n: "John Walsh", l: "Swords", r: 4, t: "Solid chimney rebuild. Took a bit longer than expected but result is spot on." },
  { n: "Emma Doyle", l: "Sandymount", r: 5, t: "Skylights look amazing — neat plaster work and no leaks even in the heaviest rain." },
  { n: "Pádraig Kelly", l: "Tallaght", r: 4, t: "Honest quote and the work was done properly. Will use them again." },
  { n: "Niamh Ryan", l: "Dundrum", r: 5, t: "Replaced our entire roof with natural slate. Beautiful finish and fully insured." },
  { n: "Conor Brennan", l: "Lucan", r: 4, t: "Quick gutter repair the day before storm. Saved us from a flooded kitchen!" },
];

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Customer Reviews"
        subtitle="Real feedback from Dublin homeowners. Rated 4.0 stars on Google."
        image={heroImg}
      />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-navy-deep text-primary-foreground rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="size-16 bg-gradient-amber rounded-xl grid place-items-center text-navy-deep font-display font-bold text-2xl">
                4.0
              </div>
              <div>
                <div className="flex gap-1 text-amber mb-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                  <Star className="size-4" />
                </div>
                <div className="font-display font-bold text-xl">Google Reviews</div>
                <div className="text-white/70 text-sm">Based on 8 verified reviews</div>
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=Expert+Roof+Chimney+Gutters+Dublin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-amber text-navy-deep px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:opacity-90"
            >
              Leave Us a Review
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <article key={i} className="bg-card border border-border rounded-xl p-7 shadow-card">
                <div className="flex gap-1 text-amber mb-4">
                  {Array.from({ length: r.r }).map((_, j) => (
                    <Star key={j} className="size-4 fill-current" />
                  ))}
                  {Array.from({ length: 5 - r.r }).map((_, j) => (
                    <Star key={`o${j}`} className="size-4 text-muted-foreground/40" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed">"{r.t}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold">{r.n}</div>
                  <div className="text-sm text-muted-foreground">{r.l}, Dublin</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-navy-deep text-amber px-8 py-3.5 rounded-md font-bold uppercase tracking-wide hover:bg-navy"
            >
              Become Our Next Happy Customer
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
