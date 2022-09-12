// on verifie si le panier n'est pas vide, si c'est le cas alors on vérifie que l'on vient pas déja du panier via un saisie directe dans l'url
//  et on redirige vers l'acceuil en affichant un message d'erreurs

export default defineNuxtPlugin((to,from) =>{

    const {selectedProducts} = useCart();


    if(selectedProducts.value.length === 0){

        if(from.name ==="cart"){

            return navigateTo('/')

        } else {

            const { $toast } = useNuxtApp();

            $toast.error('impossible, Votre panier est vide !')
            return abortNavigation()
            
        }
    
    }
})