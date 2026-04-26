import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section
      className="relative h-[42vh] min-h-[320px] flex items-end overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, oklch(0.18 0.03 250 / 0.85), oklch(0.18 0.03 250 / 0.55)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 pb-12 text-primary-foreground">
        <div className="h-1 w-16 bg-amber mb-5 rounded-full" />
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg text-white/80 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
