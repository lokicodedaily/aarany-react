import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'cafeHours',
  title: 'Café Hours',
  type: 'document',
  fields: [
    defineField({
      name: 'schedule',
      title: 'Schedule',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'day', title: 'Day', type: 'string' }),
            defineField({ name: 'hours', title: 'Hours (e.g. 06:00 — 18:00)', type: 'string' }),
            defineField({ name: 'note', title: 'Note (e.g. jazz from 8)', type: 'string' }),
          ],
          preview: { select: { title: 'day', subtitle: 'hours' } },
        },
      ],
    }),
  ],
});
