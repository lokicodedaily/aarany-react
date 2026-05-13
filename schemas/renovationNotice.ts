import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'renovationNotice',
  title: 'Renovation Notice',
  type: 'document',
  fields: [
    defineField({ name: 'active', title: 'Show banner', type: 'boolean', initialValue: true }),
    defineField({ name: 'headline', title: 'Headline', type: 'string', initialValue: 'A NOTE FROM THE FRONT DESK' }),
    defineField({ name: 'body', title: 'Body text', type: 'text', rows: 3 }),
    defineField({ name: 'discountPercent', title: 'Discount %', type: 'number', initialValue: 20 }),
    defineField({ name: 'startDate', title: 'Start date', type: 'date' }),
    defineField({ name: 'endDate', title: 'End date', type: 'date' }),
  ],
});
