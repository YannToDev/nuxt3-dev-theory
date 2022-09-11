<template>
    <div class="p-5">

        <h1 class="text-5xl py-5">Panier</h1>

        <template v-if="selectedProducts && selectedProducts.length >0">

            <div class="overflow-x-auto w-full">

                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input 
                                        @change="changeAllProductsCheckboxes($event)" 
                                        type="checkbox" 
                                        class="checkbox group-product-checkbox" 
                                    />
                                </label>
                            </th>
                            <th>Articles</th>
                            <th>Quantité</th>
                            <th>PRix à l'unité</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row -->
                        <tr v-for="product in selectedProducts" :key="product.id">
                            <th>
                                <label>
                                    <input 
                                        @change="updateDeleteBtnState" 
                                        :data-set-id="product.id" 
                                        type="checkbox"  
                                        class="checkbox single-product-checkbox" 
                                    />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img :src="`/assets/images/`+product.imageName" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">
                                            {{product.name}}
                                            <small v-if="product.variants" class="opacity-75">
                                                ({{product.variants.join(',')}})
                                            </small>
                                        </div>
                                        <div class="text-sm opacity-50">
                                            {{categories.find(category =>category.id === product.category).title}}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {{product.quantity}}
                            </td>
                            <td>{{product.price}}</td>
                            <th>
                                <button @click="$router.push('/product/'+ product.id)" class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>

                </table>

            </div>

            <button class="btn btn-primary mt-5">
                confirmer l'achat {{TotalPrice}} €
            </button>
            <button v-show="showDeleteBtn" @click="deleteCheckedProduct" class="btn btn-error">Retirer des produits</button>

        </template>

        <p v-else>Aucun produit n'est selectionné.</p>

    </div>
</template>

<script setup>
    // récupération des produits et du prix total
    const {
        selectedProducts,
        TotalPrice,
        removeProductFromCart
    } = useCart()

    const categories = useCategories();

    // réf qui permet de gérer l'affichage du bouton de suppression de produit
    const showDeleteBtn = ref(false);
    
    
    // on récupère l'état de la chexbox principale, si elle est cochée alors on dit qu'il doit en être de même
    // pour chacune des checkbox individuelles liée à chaque produit
    // on exécute la méthode qui va permettre d'afficher le bouton
    const changeAllProductsCheckboxes = (event)=>{

        const mainCheckBox = event.target.checked;
        console.log(mainCheckBox)
        
        document.querySelectorAll('.single-product-checkbox').forEach(checkbox =>{

            checkbox.checked = mainCheckBox
            
        })
        
        updateDeleteBtnState()
    }
    
    // on regarde si la taille du tableau contenant le nombre de checkbox coché est plus grand que 0, c'est donc une condition si elle est vraie
    // cela renvoie true et on dit que la ref associée au bouton vaut cette valeur et donc le bouton va s'afficher si une check est cochée
    const updateDeleteBtnState =()=>{

        
        const allCheckox = document.querySelectorAll('.single-product-checkbox');
        const areChecked = document.querySelectorAll('.single-product-checkbox:checked');
        const areSomeProductsSelected = areChecked.length >0
     
       showDeleteBtn.value = areSomeProductsSelected;

        if(areChecked.length === 0){

            document.querySelector('.group-product-checkbox').checked = false;
        }
        
        if(allCheckox.length === areChecked.length){

            document.querySelector('.group-product-checkbox').checked = true;
        }
       
    }

    // méthode qui récupère l'ID du produit lié à la checkbox et qui le supprimer à l'aide
    //  de la méthode du compoasable
    const deleteCheckedProduct = () =>{

        const checkedProducts = document.querySelectorAll('.single-product-checkbox:checked');
        checkedProducts.forEach(product =>{

            const productId = Number(product.dataset.setId);
            removeProductFromCart(productId);
        })
        showDeleteBtn.value = false;
    }

</script>

<style lang="scss" scoped>
</style>