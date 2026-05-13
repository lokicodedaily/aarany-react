import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'adventure',
  title: 'Adventure',
  type: 'document',
  orderings: [{ title: 'Number', name: 'number', by: [{ field: 'number', direction: 'asc' }] }],
  fields: [
    defineField({ name: 'number', title: 'Number (e.g. 01)', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({ name: 'startTime', title: 'Start time / when', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'priceNote', title: 'Price / note (e.g. ₹4,500 per jeep)', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['safari', 'trek', 'wildlife', 'experience', 'dining'] },
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'subtitle' },
  },
});
