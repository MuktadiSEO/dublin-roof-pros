import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { useState } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import flatRoof from "@/assets/service-flat-roof.jpg";
import roofRepair from "@/assets/service-roof-repair.jpg";
import rubberRoof from "@/assets/service-rubber-roof.jpg";
import roofReplace from "@/assets/service-roof-replacement.jpg";
import chimney from "@/assets/service-chimney.jpg";
import gutter from "@/assets/service-gutter.jpg";
import fascia from "@/assets/service-fascia.jpg";
import skylight from "@/assets/service-skylight.jpg";
import heroImg from "@/assets/hero-roofing.jpg";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work | Expert Roof Dublin Project Gallery" },
      { name: "description", content: "See recent roofing, chimney and gutter projects completed across Dublin by Expert Roof." },
      { property: "og:title", content: "Our Work | Expert Roof Dublin" },
      { property: "og:description", content: "Recent roofing projects from across Dublin." },
      { property: "og:image", content: work1 },
    ],
  }),
  component: WorkPage,
});

type Cat = "All" | "Roofing" | "Flat Roof" | "Chimney" | "Gutters" | "Skylight" | "Fascia";

const projects: { src: string; cat: Exclude<Cat, "All">; title: string }[] = [
  { src: work1, cat: "Roofing", title: "Slate roof — Georgian terrace" },
  { src: work2, cat: "Chimney", title: "Stone chimney restoration" },
  { src: work3, cat: "Gutters", title: "Seamless aluminium gutters" },
  { src: work4, cat: "Flat Roof", title: "EPDM rubber flat roof" },
  { src: work5, cat: "Skylight", title: "Twin skylight installation" },
  { src: work6, cat: "Fascia", title: "uPVC fascia & soffit" },
  { src: flatRoof, cat: "Flat Roof", title: "Modern flat roof extension" },
  { src: roofRepair, cat: "Roofing", title: "Slate repair, Drumcondra" },
  { src: rubberRoof, cat: "Flat Roof", title: "EPDM membrane install" },
  { src: roofReplace, cat: "Roofing", title: "Full roof replacement" },
  { src: chimney, cat: "Chimney", title: "Chimney rebuild & cap" },
  { src: gutter, cat: "Gutters", title: "Gutter clean & repair" },
  { src: fascia, cat: "Fascia", title: "Fascia replacement" },
  { src: skylight, cat: "Skylight", title: "Velux skylight fitted" },
];

const cats: Cat[] = ["All", "Roofing", "Flat Roof", "Chimney", "Gutters", "Skylight", "Fascia"];

function WorkPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <SiteLayout>
      <PageHero
        title="Our Work"
        subtitle="A snapshot of recent projects across Dublin and surrounding areas."
        image={heroImg}
      />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition border ${
                  active === c
                    ? "bg-navy-deep text-amber border-navy-deep"
                    : "bg-secondary border-border hover:border-amber"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {filtered.map((p, i) => (
              <figure
                key={i}
                className="mb-4 break-inside-avoid rounded-lg overflow-hidden border border-border group relative"
              >
                <img src={p.src} alt={p.title} loading="lazy" className="w-full h-auto group-hover:scale-105 transition duration-500" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent text-primary-foreground p-4 opacity-0 group-hover:opacity-100 transition">
                  <div className="text-xs uppercase tracking-widest text-amber">{p.cat}</div>
                  <div className="font-semibold">{p.title}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-amber text-navy-deep px-8 py-3.5 rounded-md font-bold uppercase tracking-wide shadow-amber hover:opacity-90"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
