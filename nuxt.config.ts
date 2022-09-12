import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

       publicRuntimeConfig :{

        categories : [

            {id:'head', title:'tête'},
            {id:'body', title:'Hauts'},
            {id:'other', title:'Autres'}
        ]
       },

    meta:{

        link:[

            {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
            {rel : 'preconnect', href:'https://fonts.gstatic.com', crossorigin:true},
            {rel: 'stylesheet', href:"https://fonts.googleapis/com/css2?family=Roboto&display=swap"}
        ],

        // title:'DevTheory Merch'
    },

    modules :["@nuxtjs/tailwindcss"]

    

})

