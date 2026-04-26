import flatRoof from "@/assets/service-flat-roof.jpg";
import roofRepair from "@/assets/service-roof-repair.jpg";
import rubberRoof from "@/assets/service-rubber-roof.jpg";
import roofReplacement from "@/assets/service-roof-replacement.jpg";
import chimney from "@/assets/service-chimney.jpg";
import gutter from "@/assets/service-gutter.jpg";
import fascia from "@/assets/service-fascia.jpg";
import skylight from "@/assets/service-skylight.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "flat-roofing",
    title: "Flat Roofing",
    short: "Durable flat roof installations built for the Irish climate.",
    description:
      "We install and maintain high-performance flat roofs for extensions, garages, and commercial buildings across Dublin. Our systems are designed to handle Ireland's wet and windy weather with robust waterproofing and proper drainage.",
    benefits: [
      "Long-lasting waterproof membranes",
      "Suitable for extensions, garages and dormers",
      "High-quality insulation options",
      "Free no-obligation surveys",
    ],
    image: flatRoof,
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    short: "Fast, reliable repairs for leaks, missing slates and storm damage.",
    description:
      "From a single slipped slate to major storm damage, our experienced roofers respond quickly across Dublin to keep your home safe and dry. We diagnose the root cause and provide lasting repairs—not just patch jobs.",
    benefits: [
      "24/7 emergency call-outs",
      "Leak detection & moisture surveys",
      "Slate, tile and felt repairs",
      "Insurance work welcomed",
    ],
    image: roofRepair,
  },
  {
    slug: "rubber-roofing",
    title: "Rubber Roofing (EPDM)",
    short: "Premium EPDM rubber roofs guaranteed for decades.",
    description:
      "EPDM rubber roofing is one of the most reliable flat-roof systems available. Our seamless installations deliver a watertight finish that outperforms felt and lasts up to 50 years.",
    benefits: [
      "Single-piece seamless membrane",
      "Up to 50-year lifespan",
      "Fully waterproof & UV resistant",
      "Low maintenance",
    ],
    image: rubberRoof,
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    short: "Complete re-roofing using premium slate and tile.",
    description:
      "When repairs are no longer enough, our team delivers full roof replacements with traditional natural slate, concrete or clay tile. We strip, re-felt, batten and finish your roof to the highest standard.",
    benefits: [
      "Natural slate & tile options",
      "New felt, battens and flashings",
      "Improved insulation & ventilation",
      "Fully insured workmanship",
    ],
    image: roofReplacement,
  },
  {
    slug: "chimney-repair",
    title: "Chimney Repair & Sweeping",
    short: "Restoration, re-pointing and sweeping for safe, working chimneys.",
    description:
      "Cracked pots, failed flashing, or a flue that needs sweeping? We handle every aspect of chimney care—from structural rebuilds to professional sweeping—to keep your home safe and warm.",
    benefits: [
      "Re-pointing and rebuilds",
      "New lead flashings and cowls",
      "Professional chimney sweeping",
      "Cap and bird-guard fitting",
    ],
    image: chimney,
  },
  {
    slug: "gutter-repair",
    title: "Gutter Cleaning & Repair",
    short: "Keep water flowing and protect your home from damp damage.",
    description:
      "Blocked or damaged gutters cause damp, rot, and structural damage. Our team cleans, repairs, re-aligns or fully replaces gutters and downpipes for homes across Dublin.",
    benefits: [
      "Full gutter clean & flush",
      "Leak repairs & re-sealing",
      "New seamless gutter systems",
      "Downpipe & soakaway works",
    ],
    image: gutter,
  },
  {
    slug: "fascia-soffit",
    title: "Fascia & Soffit Replacement",
    short: "Modern uPVC fascias and soffits that never need painting.",
    description:
      "Tired or rotting fascias and soffits don't just look bad—they let damp into your roof. We replace them with maintenance-free uPVC in a range of styles and colours.",
    benefits: [
      "Maintenance-free uPVC",
      "Wide range of styles and colours",
      "Improved roof ventilation",
      "Tidy, debris-free clean-up",
    ],
    image: fascia,
  },
  {
    slug: "skylight-installation",
    title: "Skylight Installation",
    short: "Bring natural light into your home with Velux-style skylights.",
    description:
      "Transform attic conversions, kitchens and landings with professionally installed roof windows. We supply and fit leading brands with perfect flashing and watertight finishes.",
    benefits: [
      "Velux & FAKRO certified fitting",
      "Perfect flashing & weather seal",
      "Manual or electric options",
      "Plastered finish available",
    ],
    image: skylight,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
