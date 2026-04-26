import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-roofing.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Expert Roof Chimney & Gutters Dublin" },
      {
        name: "description",
        content:
          "Full range of roofing services in Dublin: flat roofing, repairs, EPDM, replacements, chimneys, gutters, fascia, soffits and skylights.",
      },
      { property: "og:title", content: "Our Services | Expert Roof Dublin" },
      { property: "og:description", content: "Complete roofing, chimney and gutter services in Dublin." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Our Services"
        subtitle="One trusted team for every job on your roof — from minor fixes to full replacements."
        image={heroImg}
      />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => (
              <article
                key={s.slug}
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="size-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-7">
                  <h2 className="font-display font-bold text-2xl">{s.title}</h2>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{s.short}</p>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-2 mt-5 font-semibold text-amber hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
