// schemas/pageBuilder.js
import { defineType } from 'sanity';


const PageBuilder = defineType({
  name: 'page',
  title: 'Page Builder',
  type: 'document',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'components',
      type: 'array',
      title: 'Page Components',
      description: 'Add, edit, and reorder components',
      of: [
        { type: 'reference', to: [{ type: 'banner' }, { type: 'howWeWork' }, { type: 'pricing' }, { type: 'reviews' }] },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title: title || 'Untitled Page Builder',
    }),
  },
});

export default PageBuilder;
