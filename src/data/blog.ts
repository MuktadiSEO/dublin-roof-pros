import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "spot-roof-damage-irish-winter",
    title: "How to Spot Roof Damage After an Irish Winter",
    date: "12 Mar 2025",
    excerpt:
      "Storms and freezing rain take their toll. Here's exactly what to look for once the weather clears.",
    image: blog1,
    content: [
      "Irish winters are tough on roofs. Between Atlantic storms, freeze–thaw cycles and persistent damp, even the best-built roof needs an annual once-over come spring.",
      "Start from the ground. Walk around the property and look up — are there any visibly slipped, cracked, or missing slates or tiles? Are the ridge tiles all sitting flush? Even one displaced slate can let water in and rot the timbers below.",
      "Next, inspect your gutters. Sagging, leaking joints, or vegetation growing inside are all bad signs. Overflowing gutters during heavy rain almost always indicate a blockage or broken bracket.",
      "Inside the house, check the attic on a bright day. Pinholes of daylight, water staining on rafters, or damp insulation are clear warnings.",
      "If you spot any of these, don't wait — small problems become expensive fast. We offer free roof surveys across Dublin, so call us on +353 83 486 7879 and we'll take a look.",
    ],
  },
  {
    slug: "epdm-vs-felt",
    title: "EPDM vs Felt Flat Roofing: Which Is Better?",
    date: "02 Feb 2025",
    excerpt: "We compare lifespan, cost and weather resistance to help you pick the right system.",
    image: blog2,
    content: [
      "If you're replacing or installing a flat roof in Ireland, the choice usually comes down to traditional torch-on felt or modern EPDM rubber. Both work — but they're not the same.",
      "Felt is the cheaper option upfront. It's well-understood, fast to install, and usually carries a 10–15 year guarantee. The downside is seams: every overlap is a potential point of failure.",
      "EPDM, by contrast, is installed as a single-piece membrane in most domestic situations. There are no seams across the field of the roof, and it's hugely flexible — a big plus for the temperature swings we see in Ireland.",
      "EPDM costs more initially but typically lasts 30–50 years with minimal maintenance. Over the lifetime of the roof, it's almost always cheaper.",
      "Our recommendation: for any flat roof you'd like to forget about for the next few decades, go with EPDM. Get in touch for a free quote.",
    ],
  },
  {
    slug: "gutter-cleaning-ireland",
    title: "Why Regular Gutter Cleaning Matters in Ireland",
    date: "18 Jan 2025",
    excerpt: "Blocked gutters are the silent cause of damp, rot and structural damage.",
    image: blog3,
    content: [
      "Gutters are the unsung heroes of every Irish home. They quietly redirect thousands of litres of rainwater away from your walls and foundations every year — until they don't.",
      "When gutters block with leaves, moss or roof debris, water overflows. That overflow runs down your walls, soaks into render and brickwork, and eventually causes internal damp, ruined paintwork and even structural issues.",
      "We recommend a clean at least twice a year — once in late autumn after the leaves drop, and again in spring. Homes near trees may need more frequent attention.",
      "While we're up there, we also check brackets, joints and downpipes for hidden damage. It's a small job that prevents very large bills.",
      "Book a clean with us in Dublin — we'll be in and out the same day.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
