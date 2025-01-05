import { defineArrayMember, defineField, defineType } from "sanity";


export const post= defineType({
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        defineField(
        {
            name: 'title',
            type: 'string',
            title: 'Post Title',
            description:"Title od the post",
            validation: Rule =>Rule.required(),
        }),
        
        //Slug Field
        defineField({
            name:"slug",
            type:"slug",
            title:"Slug",
            options:{
                source: 'title',
                maxLength: 96,
            },
            validation:Rule => Rule.required()
        }),
        // text Field
        defineField({
            name:"summary",
            type:"text",
            title:"Summary",
            description:"A brief summary of the post",
            validation:Rule => Rule.required()
        }),
        //images
        defineField({
            name:"image",
            type:"image",
            title:"Image",
            description:"Cover image for the post",
           
        }),
        //Content 
        defineField({
            name:"content",
            type:"array",
            title:"Content",
            of:[
                defineArrayMember(
                {type:"block"})
        ],
            validation:Rule => Rule.required()
        }),
        //Reference
        defineField({
            name:"author",
            type:"reference",
            title:"Author",
            to:[{
                type:"author"
            }]
        })

    ]
})