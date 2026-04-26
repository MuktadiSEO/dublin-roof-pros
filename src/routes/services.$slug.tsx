import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { getService, services } from "@/data/services";
import { Check, ArrowRight, Phone } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: s
        ? [
            { title: `${s.title} in Dublin | Expert Roof Chimney & Gutters` },
            { name: "description", content: s.short },
            { property: "og:title", content: `${s.title} in Dublin` },
            { property: "og:description", content: s.short },
            { property: "og:image", content: s.image },
          ]
        : [{ title: "Service | Expert Roof" }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-display font-bold">Service not found</h1>
        <Link to="/services" className="text-amber mt-4 inline-block">
          Back to all services
        </Link>
      </div>
    </SiteLayout>
  ),
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  return (
    <SiteLayout>
      <PageHero title={service.title} subtitle={service.short} image={service.image} />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="text-amber font-semibold uppercase tracking-widest text-sm">
              {service.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-balance">
              Professional {service.title.toLowerCase()} across Dublin
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            <div className="rounded-xl overflow-hidden mt-9 border border-border shadow-card">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <h3 className="text-2xl font-display font-bold mt-12">Benefits & Features</h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {service.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 bg-secondary rounded-lg p-4 border border-border"
                >
                  <Check className="size-5 text-amber shrink-0 mt-0.5" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-display font-bold mt-12">Our Process</h3>
            <ol className="mt-5 space-y-4">
              {[
                "Free site survey and quote",
                "Transparent pricing — no surprises",
                "Skilled installation by our experienced team",
                "Tidy clean-up and full satisfaction check",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="size-9 shrink-0 rounded-full bg-gradient-amber grid place-items-center font-bold text-navy-deep">
                    {i + 1}
                  </span>
                  <span className="pt-1.5 text-foreground/85">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 p-7 rounded-xl bg-navy-deep text-primary-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <div className="font-display font-bold text-xl">Ready to get started?</div>
                <div className="text-white/70 text-sm mt-1">Free, no-obligation quotes — fast.</div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-amber text-navy-deep px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:opacity-90"
              >
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <h4 className="font-display font-bold text-lg">Other Services</h4>
              <ul className="mt-4 space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className={`flex items-center justify-between py-2 px-3 rounded-md text-sm border-l-2 transition ${
                        s.slug === service.slug
                          ? "bg-amber/10 border-amber font-semibold text-navy-deep"
                          : "border-transparent hover:bg-secondary hover:border-amber/50"
                      }`}
                    >
                      {s.title}
                      <ArrowRight className="size-3.5 opacity-50" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-amber text-navy-deep rounded-xl p-7">
              <div className="font-display font-bold text-2xl uppercase">Open 24 Hours</div>
              <p className="text-sm mt-2 opacity-80">Emergency call-outs welcome day or night.</p>
              <a
                href="tel:+353834867879"
                className="mt-5 inline-flex items-center gap-2 bg-navy-deep text-amber px-5 py-3 rounded-md font-bold w-full justify-center"
              >
                <Phone className="size-4" /> +353 83 486 7879
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-display font-bold mb-8">You may also need</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elegant transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <div className="font-display font-bold">{s.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.short}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
