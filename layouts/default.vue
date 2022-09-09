<!-- Layout qui contient la sidebar ainsi que le contenu de chacune de nos pages -->

<template>
    <div class="flex h-full">

        <!-- start: SIDEBAR -->
        <div class="fixed top-0 bottom-0 left-0 w-64 py-5 bg-primary text-primary-content">
            <h1 class="mt-5 px-5 text-2xl font-bold">DT Merch</h1>

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

    // on définit une constante à partir du composable
    const categories = useCategories();

    // on définit les différentes catégories du menu
    const menuCategoryItems = categories.value.map(category => {

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

</script>

<style scoped>
 

    .menu li.hover-bordered a:hover, .menu li.bordered a {
        @apply border-primary-content
    }

</style>



