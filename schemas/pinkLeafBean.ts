import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pinkLeafBean',
  title: 'Pink Leaf Bean',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Origin name (e.g. Coorg, Karnataka)', type: 'string' }),
    defineField({ name: 'description', title: 'Tasting description', type: 'text', rows: 2 }),
    defineField({
      name: 'roastLevel',
      title: 'Roast level',
      type: 'string',
      options: { list: ['light', 'medium', 'dark'] },
    }),
    defineField({ name: 'tastingNotes', title: 'Tasting notes', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'roastLevel' },
  },
});
