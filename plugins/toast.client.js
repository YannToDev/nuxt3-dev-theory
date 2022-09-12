// installation d'un plugin externe et qui sera fourni à l'application via un provide

import { createToaster } from "@meforma/vue-toaster"

// on créer un toaster à l'aide de la librairie et on le provide dans l'application
export default defineNuxtPlugin(nuxtApp =>{

    const toaster = createToaster({

        position :'top-right',
        duration: 1500
    })

    nuxtApp.provide('toast', toaster);
})