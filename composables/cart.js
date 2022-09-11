
// composable pour ajouter un produit au panier
export const useCart = () =>{

    // mise en place d'un cookie
    const saveSelectedProducts = useCookie('selectedProduct',{

        expires: new Date(Date.now() + 1000 * 60 *60 *24 * 14)
    });


    // variable qui contient le panier en lui même
    const selectedProducts = useState('selectedProducts',()=>{

        if(saveSelectedProducts.value !==undefined && saveSelectedProducts.value.length >0){

            return saveSelectedProducts.value;
        }
        else{

            return [];
        }
    });


    // variable dynamique pour calculer le prix total du panier
    const TotalPrice = computed(() =>{
    
            return selectedProducts.value.reduce((acc,product) =>(acc + (product.price) * product.quantity),0)
    });

    // variable dynamique pour afficher le nombre de produit dans le panier
    const totalProducts = computed (()=>{

        return selectedProducts.value.reduce((acc,product) =>(acc + product.quantity),0)
    })


    watch(selectedProducts.value ,() =>{

        saveSelectedProducts.value = selectedProducts.value;

    })

    // méthode qui permet d'ajouter un produit au panier
    function addProductToCart(product, variantSelect) {

        const addProductIndexInCart = selectedProducts.value.findIndex(selectedProduct => selectedProduct.id === product.id)
        
        if(addProductIndexInCart === -1 || addProductIndexInCart === undefined){

            selectedProducts.value.push({

                id:product.id,
                name:product.name,
                price:product.price,
                category : product.category,
                imageName : product.imageName,
                variants: variantSelect !== null? [variantSelect.value] :null,
                quantity:1
            });

            
        }

        else{

            const selectedProduct = selectedProducts.value[addProductIndexInCart]
            selectedProduct.quantity++;
            
            if(variantSelect !== null){

                selectedProduct.variants.push(variantSelect.value)
            }
            
        }
        console.log('cart:',selectedProducts.value, 'prix total:',TotalPrice.value)
    }

    // méthode pour supprimer un produit du panier
    function removeProductFromCart(productId){

        const productIndexInCart = selectedProducts.value.findIndex(cartProduct =>cartProduct.id === productId)
        
        if(productIndexInCart !== -1 && productIndexInCart !== undefined){

            selectedProducts.value.splice(productIndexInCart,1);
        }
        else{

            alert(`Product n°${productId} not found in cart`);
        }
        
    }
        
    return {

        selectedProducts,
        TotalPrice,
        addProductToCart,
        totalProducts,
        removeProductFromCart
    }
}



















// -------------------------------

// export const useCartSelectedProducts = () =>{

//     return useState('selectedProducts',()=>[])
// }

// // composable pour calculer le prix total du panier
// // un premier return pour le composable et un second pour le computed!
// export const useTotalPrice =() =>{

//     const selectedProducts = useCartSelectedProducts();

//     return computed(() =>{

//         return selectedProducts.value.reduce((acc,product) =>(acc + (product.price) * product.quantity),0)
//     })
// }

// // composable pour ajouter un produit au panier
// export const useCartActions = () =>{

//     const cart = useCartSelectedProducts();
//     const cartTotalPrice = useTotalPrice();

//     function addProductToCart(product, variantSelect) {

//         const addProductIndexInCart = cart.value.findIndex(selectedProduct => selectedProduct.id === product.id)
        
//         if(addProductIndexInCart === -1 || addProductIndexInCart === undefined){

//             cart.value.push({

//                 id:product.id,
//                 name:product.name,
//                 price:product.price,
//                 category : product.category,
//                 imageName : product.imageName,
//                 variants: variantSelect !== null? [variantSelect.value] :null,
//                 quantity:1
//             });
            
//         }

//         else{

//             const selectedProduct = cart.value[addProductIndexInCart]
//             selectedProduct.quantity++;
            
//             if(variantSelect !== null){

//                 selectedProduct.variants.push(variantSelect.value)
//             }
//         }
//         console.log('cart:',cart.value, 'prix total:',cartTotalPrice.value)
//     }
        
//     return {

//         addProductToCart
//     }
// }