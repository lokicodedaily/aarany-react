import { createClient } from '@sanity/client';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET ?? 'production';

export const isConnected = !!projectId && projectId !== 'your_project_id_here';

export const client = createClient({
  projectId: projectId ?? 'placeholder',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

export async function fetchOrFallback<T>(query: string, fallback: T): Promise<T> {
  if (!isConnected) return fallback;
  try {
    const result = await client.fetch<T>(query);
    return (result ?? fallback) as T;
  } catch {
    return fallback;
  }
}

export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]`,
  renovationNotice: `*[_type == "renovationNotice"][0]`,
  rooms: `*[_type == "room"] | order(number asc)`,
  adventures: `*[_type == "adventure"] | order(number asc)`,
  aaranyMenu: `*[_type == "menuItem" && restaurant == "aarany"] | order(section asc, _createdAt asc)`,
  pinkleafMenu: `*[_type == "menuItem" && restaurant == "pinkleaf"] | order(section asc, _createdAt asc)`,
  beans: `*[_type == "pinkLeafBean"]`,
  cafeHours: `*[_type == "cafeHours"][0]`,
  gallery: `*[_type == "galleryPhoto"] | order(order asc)`,
  featuredTestimonial: `*[_type == "testimonial" && featured == true][0]`,
};
