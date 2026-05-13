import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
    defineField({ name: 'author', title: 'Author name', type: 'string' }),
    defineField({ name: 'meta', title: 'Meta (e.g. Booked May 2026 · 3 villas)', type: 'string' }),
    defineField({ name: 'rating', title: 'Rating (1–5)', type: 'number' }),
    defineField({ name: 'featured', title: 'Featured on homepage', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'author', subtitle: 'meta' },
  },
});
