import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'courses',
  title: 'Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
    }),
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
    }),
    defineField({
      name: 'school',
      title: 'School',
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
      title: 'name',
      subtitle: 'code',
      media: 'imageref.image',
    },
  },
})
