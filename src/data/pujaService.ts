
//data/pujaService.ts

import rawData from "./pujaServices.json";
import { PujaService } from "../types/pujaService";

// Type assertion
const typedRawData = rawData as PujaService[];

// Helper function to create a slug
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Remove duplicate titles
const seen = new Set<string>();

const pujaServices: PujaService[] = typedRawData
  .filter((service) => {
    if (seen.has(service.title)) return false;
    seen.add(service.title);
    return true;
  })
  .map((service) => ({
    ...service,
    slug: slugify(service.title),
  }));

export { pujaServices };
