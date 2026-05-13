import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemas } from './schemas/index';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.PUBLIC_SANITY_DATASET ?? 'production';

export default defineConfig({
  name: 'aarany-resort',
  title: 'Aarany Resort',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Site Settings').id('siteSettings').child(
              S.document().schemaType('siteSettings').documentId('siteSettings')
            ),
            S.listItem().title('Renovation Notice').id('renovationNotice').child(
              S.document().schemaType('renovationNotice').documentId('renovationNotice')
            ),
            S.divider(),
            S.documentTypeListItem('room').title('Rooms'),
            S.documentTypeListItem('adventure').title('Adventures'),
            S.divider(),
            S.documentTypeListItem('menuItem').title('Menu Items'),
            S.documentTypeListItem('pinkLeafBean').title('Pink Leaf Beans'),
            S.documentTypeListItem('cafeHours').title('Café Hours'),
            S.divider(),
            S.documentTypeListItem('galleryPhoto').title('Gallery'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemas },
});
