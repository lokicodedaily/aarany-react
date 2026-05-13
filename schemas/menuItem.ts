import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'string' }),
    defineField({ name: 'price', title: 'Price (₹)', type: 'number' }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: { list: ['mornings', 'all-day', 'evenings'] },
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'string',
      options: { list: [{ title: 'Aarany Restaurant', value: 'aarany' }, { title: 'Pink Leaf Café', value: 'pinkleaf' }] },
    }),
    defineField({ name: 'available', title: 'Available', type: 'boolean', initialValue: true }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'section' },
  },
});
