<!-- Layout qui contient la sidebar ainsi que le contenu de chacune de nos pages -->

<template>
    <div class="flex h-full">

        <!-- start: SIDEBAR -->
        <div class="fixed top-0 bottom-0 left-0 w-64 py-5 bg-primary text-primary-content">
            <h1 class="mt-5 px-5 text-2xl font-bold  flex items-center justify-between">DT Merch
                <NuxtLink to="/cart">
                    <div class="indicator">    
                        <span class="indicator-item badge badge-primary">{{totalProducts}}</span>
                            <button class="btn btn-square btn-outline btn-secondary">
                            <!-- <ShoppingBagIcon></ShoppingBagIcon> -->
                            </button>
                     </div>
                </NuxtLink>
            </h1>

            <ul class="menu  mt-10 w-full px-0">
                <li 
                    v-for="(menuItem,index) in menuItems" 
                    :key="index" 
                    :class="menuItem.path === $route.path? 'bordered' : 'hover-bordered'">
                        <!-- <NuxtLink :to="menuItem.path" >{{menuItem.title}}</NuxtLink> -->
                        <NuxtLink :to="menuItem.path" >{{menuItem.title}}</NuxtLink>
                </li>
            </ul>

        </div>

        <!-- start : PAGE -->
        <div class="w-full pl-64">
            <slot></slot>
        </div>
        <!-- end : PAGE -->

    </div>
</template>

<script setup>

    // import {ShoppingBagIcon} from '@heroicons/vue/outline'

    // on définit une constante à partir du composable
    // const categories = useCategories();

    // on récupère les catégories définie comme dans nuxt.config.ts
    const{categories} = useRuntimeConfig()

    // on définit les différentes catégories du menu
    const menuCategoryItems = categories.map(category => {

        return{

            path:'/category/' + category.id,
            title:category.title
        }
    })

    // on rédéfinit tous les items du menu
    const menuItems = [

        {path:'/', title :'Acceuil'},
        ...menuCategoryItems
    ]

    const {totalProducts} = useCart(); 
    

</script>

<style scoped>
 

    .menu li.hover-bordered a:hover, .menu li.bordered a {
        @apply border-primary-content
    }

</style>



