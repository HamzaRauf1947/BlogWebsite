import { defineType, defineArrayMember, defineField } from "sanity";


export const author = defineType({
    name: "author",
    type: "document",
    title: "Author",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name",
            description: "Author's name",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "bio",
            type:"string",
            title: "Bio",
            description: "Author's biography",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            description: "Author's profile picture",
            validation: Rule => Rule.required(),
            options: {
                hotspot: true,
            }
        })
    ]
})