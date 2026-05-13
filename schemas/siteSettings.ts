import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string', initialValue: 'AARANY' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'Serenity, that you deserve.' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Reservations Email', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text', rows: 4 }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        },
      ],
    }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
  ],
});
