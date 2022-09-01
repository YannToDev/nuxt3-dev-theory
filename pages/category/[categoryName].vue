<!-- vue dynamique qui permet d'afficher les différentes catégories à partir de leur nom -->

<template>
    <div>
        <h1 class="text-5xl text-center p-5">
            Page de la catégorie {{$route.params.categoryName}}
        </h1>
        <cards-container class="mt-10">
            <product-card 
                v-for="(product,index) in products" :key="index"
                :name="product.name"
                :price="product.price"
                :img-src="product.imgSrc"
            ></product-card>
        </cards-container>
    </div>
</template>

<script setup>

    const products = [
        {
            name: 'Super hoodie',
            price: 19,
            imgSrc: 'https://picsum.photos/id/1005/400/250'
        },
        {
            name: 'Super test',
            price: 36,
            imgSrc: 'https://picsum.photos/id/1005/400/250'
        },
        {
            name: 'Super Manteau',
            price: 82,
            imgSrc: 'https://picsum.photos/id/1005/400/250'
        }
    ]

</script>

<style lang="scss" scoped>

</style>