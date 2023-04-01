import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'school',
      title: 'School',
      type: 'string',
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
    }),
    defineField({
      name: 'graduation',
      title: 'Graduation',
      type: 'string',
    }),
    defineField({
      name: 'imageref',
      title: 'ImageRef',
      type: 'reference',
      to: {type: 'images'},
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'school',
      subtitle: 'degree',
      media: 'imageref.image',
    },
  },
})
