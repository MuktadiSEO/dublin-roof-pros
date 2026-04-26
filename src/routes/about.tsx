import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ShieldCheck, Heart, Award, MapPin, ArrowRight } from "lucide-react";
import about from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Expert Roof Chimney & Gutters Dublin" },
      { name: "description", content: "Meet Dublin's local roofing team — experienced, fully insured craftsmen serving the Dublin area." },
      { property: "og:title", content: "About Expert Roof Chimney & Gutters" },
      { property: "og:description", content: "Local Dublin roofers with years of experience and a reputation built on trust." },
      { property: "og:image", content: about },
    ],
  }),
  component: AboutPage,
});

const areas = [
  "Dublin City", "Rathmines", "Drumcondra", "Clontarf", "Sandymount", "Ranelagh",
  "Dundrum", "Swords", "Malahide", "Howth", "Blackrock", "Tallaght",
  "Lucan", "Stillorgan", "Dun Laoghaire", "Glasnevin",
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        title="About Expert Roof"
        subtitle="A local Dublin team that treats every roof like our own."
        image={about}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-amber font-semibold uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Built on craft, trust and Dublin grit.</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Expert Roof Chimney & Gutters started with a simple idea: deliver honest,
              high-quality roofing work that Dublin homeowners can rely on. Years later, we're
              still doing exactly that — from emergency leak repairs to full re-roofs and
              chimney rebuilds.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe great craftsmanship speaks for itself, and our reputation has been
              built one happy customer at a time.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <img src={about} alt="Our Dublin roofing team" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber font-semibold uppercase tracking-widest text-sm">Our Values</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i: Award, t: "Quality Craft", d: "Every job — large or small — is finished to a standard we'd accept on our own homes." },
              { i: ShieldCheck, t: "Reliability", d: "We turn up when we say we will, and stand behind every repair and installation." },
              { i: Heart, t: "Local Expertise", d: "Born and based in Dublin. We know the buildings, the weather and the standards." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="bg-card border border-border rounded-xl p-7 shadow-card">
                <div className="size-12 rounded-lg bg-gradient-amber grid place-items-center mb-5">
                  <Icon className="size-6 text-navy-deep" />
                </div>
                <h3 className="font-display font-bold text-xl">{t}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-amber font-semibold uppercase tracking-widest text-sm">Service Area</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Dublin & Surrounding Areas</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                We cover all of Dublin city, county and bordering counties. Not sure if you're in our
                area? Just give us a call.
              </p>
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {areas.map((a) => (
                  <div key={a} className="flex items-center gap-2 py-2 px-3 bg-secondary rounded-md">
                    <MapPin className="size-3.5 text-amber" /> {a}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-deep text-primary-foreground rounded-2xl p-10 shadow-elegant">
              <h3 className="font-display font-bold text-3xl text-white">Get in touch</h3>
              <p className="text-white/75 mt-3">
                Free, no-obligation quotes. Honest advice from a local team.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 bg-gradient-amber text-navy-deep px-7 py-3.5 rounded-md font-bold uppercase tracking-wide hover:opacity-90"
              >
                Contact Us <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
