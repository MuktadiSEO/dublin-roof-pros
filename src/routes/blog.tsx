import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ArrowRight, Calendar } from "lucide-react";
import { posts } from "@/data/blog";
import heroImg from "@/assets/hero-roofing.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Roofing Tips & Insights from Expert Roof Dublin" },
      { name: "description", content: "Roofing advice, maintenance tips and Irish weather guides from Dublin's roofing experts." },
      { property: "og:title", content: "Expert Roof Blog" },
      { property: "og:description", content: "Roofing tips for Irish homes." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero title="The Blog" subtitle="Practical roofing advice for Irish homes." image={heroImg} />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p) => (
              <article
                key={p.slug}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition"
              >
                <Link to="/blog/$slug" params={{ slug: p.slug }}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                </Link>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
                    <Calendar className="size-3.5" /> {p.date}
                  </div>
                  <h2 className="font-display font-bold text-xl mt-3">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-amber">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{p.excerpt}</p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-1.5 mt-5 text-amber font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="size-4" />
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
