import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { getPost, posts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    return {
      meta: p
        ? [
            { title: `${p.title} | Expert Roof Blog` },
            { name: "description", content: p.excerpt },
            { property: "og:title", content: p.title },
            { property: "og:description", content: p.excerpt },
            { property: "og:image", content: p.image },
          ]
        : [{ title: "Blog post" }],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-display font-bold">Post not found</h1>
        <Link to="/blog" className="text-amber mt-4 inline-block">Back to blog</Link>
      </div>
    </SiteLayout>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug);

  return (
    <SiteLayout>
      <PageHero title={post.title} image={post.image} />
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-amber">
            <ArrowLeft className="size-4" /> Back to all posts
          </Link>
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mt-6">
            <Calendar className="size-3.5" /> {post.date}
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 text-balance">{post.title}</h1>
          <div className="prose prose-lg max-w-none mt-8 space-y-5 text-foreground/85 leading-relaxed">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 p-7 rounded-xl bg-navy-deep text-primary-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <div className="font-display font-bold text-xl">Need a roofer in Dublin?</div>
              <div className="text-white/70 text-sm mt-1">Free quotes — same-day call-outs.</div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-amber text-navy-deep px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:opacity-90"
            >
              Get a Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-display font-bold mb-8">More from the blog</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition flex"
              >
                <div className="w-32 shrink-0 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{p.date}</div>
                  <div className="font-display font-bold mt-1 group-hover:text-amber">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
