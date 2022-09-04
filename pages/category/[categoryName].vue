<!-- vue dynamique qui permet d'afficher les différentes catégories à partir de leur nom -->

<template>
    <div>
        <h1 class="text-5xl text-center p-5">
            Page de la catégorie {{categoryName}}
        </h1>
        <cards-container class="mt-10">
            <product-card 
                v-for="(product,index) in products" :key="index"
                :name="product.name"
                :price="product.price"
                :imgSrc="'/assets/images/'+product.imageName"
            ></product-card>
        </cards-container>
    </div>
</template>

<script setup>

    const route = useRoute();
    const categoryName = route.params.categoryName;


    const {data :products} = await useAsyncData(`products-${categoryName}`, () => $fetch(`http://localhost:3001/products/?category=${categoryName}`));
    console.log(products)
</script>

<style lang="scss" scoped>

</style>


<!-- on récupère le nom de la catégorie via l'URL et on et le passe au $fectch pour faire une requête 
on recupére les données dans l'objet data et que l'on rename directement en products pour pouvoir utiliser notre v-for -->