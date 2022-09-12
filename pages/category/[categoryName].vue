<!-- vue dynamique qui permet d'afficher les différentes catégories à partir de leur nom -->

<template>
    <div>
       
        <div v-if="products" class="p-5">
            <h1 class="text-5xl py-5">
                Page de la catégorie {{$getCategoryTitle(categoryName)}}
            </h1>
            <cards-container v-if="products && products.length" class="mt-10">
                <product-card 
                    v-for="(product,index) in products" :key="index"
                    :name="product.name"
                    :price="product.price"
                    :imgSrc="'/assets/images/'+product.imageName"
                    :id="product.id"
                ></product-card>
            </cards-container>

            <p v-else>
                Aucun produit dans cette catégorie
            </p>

        </div>

        <hero-loader v-else-if="pending"/>   

    </div>
    
</template>

<script setup>

    // on utilise l'objet route pour récupérer le nom de la catégorie dispo en paramètre
    const route = useRoute();
    const categoryName = route.params.categoryName;
    

    // // on récupère le titre de la catégorie dont l'id (le nom) est le même que celui récupérer dans l'URL
    // const categoryNameTemp = categories.value.find(category => category.id === categoryName).title

    // pour pouvoir donner un titre à a page
    useHead({
        title:`DevTheory-Merch/Category/${categoryName}`
    })

    // const {data:products} = await useAsyncData(`products-${categoryName}`, () => $fetch(`http://localhost:3001/products/?category=${categoryName}`));
    const {data :products,pending,error} = await useLazyFetch(`http://localhost:3001/products/?category=${categoryName}`, { initialCache: false });


</script>

<style lang="scss" scoped>

  

</style>


<!-- on récupère le nom de la catégorie via l'URL et on et le passe au $fectch pour faire une requête 
on recupére les données dans l'objet data et que l'on rename directement en products pour pouvoir utiliser notre v-for -->

<!-- concrétement dans la pratique on utilise pas await useAsyncData() mais useFetch() qui va fusionner useAsyncData() et $fetch
tout en créant une key qui va dépendre de l'url et des options que l'on va mettre à useFetch()--
on peut passer plusieurs options provenant de useAyncData:  
    - lazy
    - server
    - default
    - pick
    - transform 
-->

<!-- pick fait parti des best pratices. Supposons qu'on a un appel API qui renvoi tout un tas de donnée
 mais nous on ne va utiliser que le title et la description alors on rajoute un objet :<template>
    
    const {data: mountain} = await useFetch('/api/mountains/averest', {pick :['title', 'description']})

    dans ce cas l'objet "mountain" contiendra juste title et description

    L'interêt est que useFetch() va stocker toutes les infos de l'api dans le state de l'application ce qui peut la ralentir
    si l'APi renvoi vraiment beaucoup de donnée.
-->
