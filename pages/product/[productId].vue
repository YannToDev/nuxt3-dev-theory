<!-- vue dynamique qui permet d'afficher les caractéristiques d'un produit donné -->
<template>
    <div>
        <!-- si la requêet est terminéee on affiche les produits reçus -->
        <div v-if="product" class="flex flex-row-reverse gap-5 p-5">

            <div class="w-2/3">
                <img class="w-full" :src="`/assets/images/`+product.imageName" :alt="product.name">
            </div>

            <div class="w-1/3">

                <div class="text-sm breadcrumbs w-full break-words">
                    <ul>
                        <li>Catégorie</li>
                        <li>
                            <Nuxt-link :to="`/category/`+ product.category">{{$getCategoryTitle(product.category)}}</Nuxt-link>
                        </li>
                        <li class="text-base-content/75">
                            <span>Ce produit</span>
                        </li>
                    </ul>
                </div>
            
                <h1 class="mt-8 text-xl font-bold">{{product.name}} (n°)</h1>
                <p class="mt-4 text-sm">
                    <template v-if="reviewsAvg">
                        <span class="align-middle">{{reviewsAvg}}</span>

                        <small class="pl-3 align-middle">{{product.reviews.length}} avis</small>
                    </template>

                    <template v-else>
                        <small class="pl-3 align-middle">aucun avis</small>
                        <!-- <EmptyStartIcon class="inline w-5 align-middle" /> -->
                    </template>
                </p>
                <p class="mt-4 text-sm font-bold">
                    {{product.price}}€
                </p>

                <form @submit.prevent class="mt-8">
                    <select ref="variantSelect" v-if="product.variants" class="select select-bordered w-full max-w-xs">
                        <option v-for="(variant,i) in product.variants" :key="i"
                            :selected="variant===product.defaultVariant">
                            {{variant}}
                        </option>
                    </select>

                    <button @click="addProductToCart(product, variantSelect)" class="w-full mt-4 btn">Ajouter au panier</button>
                    <button class="w-full mt-4 btn btn-primary">Acheter maintenant</button>
                </form>

            </div>

        </div>

        <!-- si la requête est en cours on affiche le chargement -->
        <hero-loader v-else-if="pending" />

        <!-- si on a une erreur on l'affiche -->
        <div v-else-if="error">
            <hero-error message="Ce produit ne sempble pas exister" />
        </div>

    </div>

</template>

<script setup>
  
    const route = useRoute();
    const productId = route.params.productId;

    const {addProductToCart} = useCart();

    // pour récupérer la valeur du select dans le DOM
    const variantSelect = ref(null);
    
    // pour spécifier un titre dynamiquement
    useHead({

        title: `DevTheory-Merch/product/${productId}`,
        bodyAttrs: {

            class: 'ProductAttrs'
        },
    })


    // requete pour récupérer les produits, l'erreur et la variable qui permet de savoir si la requête est en cours ou non
    const {data: product,pending,error} = await useLazyFetch(`http://localhost:3001/products/${productId}?_embed=reviews`, {initialCache: false })
     

    // on cherche l'id(le nom) de la category qui correspond à la category récupéré dans via la requete
    // !! on utilise une computed car product est en lazy et une ref!!
    // const categoryNameTemp = computed(() =>{

    //      return categories.value.find(category => category.id === product.value.category).title

    // })

    
    // computed qui permet de calculer la moyenne des notes
    const reviewsAvg = computed(() => {

        if (product.value.reviews.length > 0)

            return product.value.reviews.reduce((acc, review) => acc + review.rating, 0) / product.value.reviews.length
        else {

            return null
        }
    })
</script>





<!-- import {StarIcon} from "@heroicons/vue/solid"
 import {StarIcon as EmptyStarIcon} from '@heroicons/vue/outline'
  <StarIcon class="ml-1 inline w-5 align-middle"></StarIcon> -->