
// composable pour ajouter un produit au panier
export const useCart = () =>{

    const selectedProducts = useState('selectedProducts',()=>[]);

    const TotalPrice = computed(() =>{
    
            return selectedProducts.value.reduce((acc,product) =>(acc + (product.price) * product.quantity),0)
    });


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
        
    return {

        selectedProducts,
        TotalPrice,
        addProductToCart
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