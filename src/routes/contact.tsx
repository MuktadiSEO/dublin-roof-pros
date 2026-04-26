import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Phone, Clock, MapPin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { services } from "@/data/services";
import heroImg from "@/assets/hero-roofing.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Expert Roof Chimney & Gutters Dublin" },
      { name: "description", content: "Contact Expert Roof in Dublin. Open 24 hours. Call +353 83 486 7879 or send us a message." },
      { property: "og:title", content: "Contact Expert Roof Dublin" },
      { property: "og:description", content: "Get in touch — open 24 hours, free quotes." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  service: z.string().trim().min(1, "Please select a service"),
  message: z.string().trim().min(5, "Tell us a little about the job").max(1000),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((iss) => {
        const k = iss.path[0] as string;
        if (!fieldErrors[k]) fieldErrors[k] = iss.message;
      });
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sent");
    e.currentTarget.reset();
  };

  return (
    <SiteLayout>
      <PageHero
        title="Get In Touch"
        subtitle="Free, no-obligation quotes. We're available 24 hours across Dublin."
        image={heroImg}
      />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <aside className="space-y-6">
            <div className="bg-navy-deep text-primary-foreground rounded-xl p-7 shadow-elegant">
              <h3 className="font-display font-bold text-2xl text-amber">Contact Info</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <Phone className="size-5 text-amber mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Phone</div>
                    <a href="tel:+353834867879" className="font-semibold text-white hover:text-amber">
                      +353 83 486 7879
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="size-5 text-amber mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Email</div>
                    <a href="mailto:info@expertroof.ie" className="font-semibold text-white hover:text-amber">
                      info@expertroof.ie
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="size-5 text-amber mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Hours</div>
                    <div className="font-semibold text-white">Open 24 Hours · 7 Days</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="size-5 text-amber mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Service Area</div>
                    <div className="font-semibold text-white">Dublin & Surrounding Areas</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-amber text-navy-deep rounded-xl p-6">
              <div className="font-display font-bold uppercase">Emergency?</div>
              <p className="text-sm mt-1 opacity-80">We're on call 24/7 for storm damage and leaks.</p>
              <a
                href="tel:+353834867879"
                className="mt-4 inline-flex items-center gap-2 bg-navy-deep text-amber px-5 py-2.5 rounded-md font-bold w-full justify-center"
              >
                <Phone className="size-4" /> Call Now
              </a>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8 shadow-card">
              <h2 className="text-3xl font-display font-bold">Request a Free Quote</h2>
              <p className="text-muted-foreground mt-2">
                Fill in the form and we'll get back to you within a few hours.
              </p>

              {status === "sent" && (
                <div className="mt-6 p-4 rounded-md bg-amber/15 border border-amber/40 text-navy-deep font-semibold">
                  Thanks — we've got your message and will be in touch shortly.
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-7 grid sm:grid-cols-2 gap-5" noValidate>
                <Field label="Name" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                <div>
                  <label className="block text-sm font-semibold mb-2">Service Needed</label>
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full bg-background border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other / Not sure</option>
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-destructive">{errors.service}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us a bit about the job..."
                    className="w-full bg-background border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gradient-amber text-navy-deep px-7 py-3.5 rounded-md font-bold uppercase tracking-wide shadow-amber hover:opacity-90"
                  >
                    <Send className="size-4" /> Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-card">
              <iframe
                title="Dublin map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-6.45%2C53.27%2C-6.10%2C53.42&layer=mapnik"
                className="w-full h-[360px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-background border border-input rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}
