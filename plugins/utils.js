// plugin interne crée par nous pour fournir une méthode qui permet de renvoyer le nom d'un catégorie
// méthode nécessaire à plusieurs endroits du code d'ou l'intérêt du plugin

export default defineNuxtPlugin(nuxtApp =>{

    nuxtApp.provide("getCategoryTitle",(categoryId) => {

        
        // const categories = useCategories()
        const {categories} = useRuntimeConfig()
        const category = categories.find(category =>category.id === categoryId)
        return category? category.title : 'Inconnue'
        
      })
})



 // const categories = useCategories()