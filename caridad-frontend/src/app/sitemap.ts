import type { MetadataRoute } from "next";
import { NOTAS } from "@/constants/notas";

export const dynamic = "force-static";

const BASE_URL = "https://parroquianuestrasenoradelacaridad.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const notaEntries: MetadataRoute.Sitemap = NOTAS.map((nota) => ({
    url: `${BASE_URL}/padre-jorge-gandur/${nota.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/padre-jorge-gandur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/nuevo-templo`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...notaEntries,
  ];
}
