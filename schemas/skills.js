import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'imageref',
      title: 'ImageRef',
      type: 'reference',
      to: {type: 'images'},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'imageref.image',
    },
  },
})
