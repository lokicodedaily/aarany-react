import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'galleryPhoto',
  title: 'Gallery Photo',
  type: 'document',
  fields: [
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['villas', 'food', 'wildlife', 'people', 'details'] },
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Aspect ratio',
      type: 'string',
      options: { list: ['square', 'portrait', 'landscape', 'wide'] },
    }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'caption', media: 'image' },
  },
});
