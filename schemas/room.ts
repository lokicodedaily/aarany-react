import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'room',
  title: 'Room',
  type: 'document',
  orderings: [{ title: 'Number', name: 'number', by: [{ field: 'number', direction: 'asc' }] }],
  fields: [
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'number', title: 'Number (e.g. 01)', type: 'string' }),
    defineField({ name: 'name', title: 'Name (e.g. Pool Villa One)', type: 'string' }),
    defineField({ name: 'subName', title: 'Sub name (e.g. The Mahua)', type: 'string' }),
    defineField({ name: 'pricePerNight', title: 'Price per night (₹)', type: 'number' }),
    defineField({ name: 'sleeps', title: 'Sleeps', type: 'number' }),
    defineField({ name: 'sizeSqM', title: 'Size (m²)', type: 'number' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'available', title: 'Available', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'subName' },
  },
});
