import {PortableTextComponents} from '@portabletext/react';

export const components:PortableTextComponents = {
    block:{
        h3:({children})=><h3 className='text-3xl font-bold text-accentDarkSecondary my-4'>{children}</h3>

    },

    listItem:{
        bullet:({children})=><li className='list-disc mb-3 marker:text-accentDarkSecondary list-inside ml-4'>{children}</li>
    },

    marks:{
        strong:({children})=><strong className='font-bold text-dark dark:text-white'>{children}</strong>
    }
}