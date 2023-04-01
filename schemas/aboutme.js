import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutme',
  title: 'About Me',
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
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'imageref.image',
    },
  },
})
