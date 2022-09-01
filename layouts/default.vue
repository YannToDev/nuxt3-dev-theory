<!-- on l'appel default car il va s'appliquer partout et on aura pas besoin de spécifier à tel ou tel
page de l'utiliser. Il affichera toujours le menu et il affiche le contenu de la page de façon dynamique
à l'aide d'un slot -->

<template>
    <div class="flex h-full">

        <!-- start: SIDEBAR -->
        <div class="fixed top-0 bottom-0 left-0 w-64 py-5 bg-primary text-primary-content">
            <h1 class="mt-5 px-5 text-2xl font-bold">DT Merch</h1>

            <ul class="menu  mt-10 w-full px-0">
                <li v-for="(menuItem,index) in menuItems" :key="index" :class="menuItem.path === $route.path? 'bordered' : 'hover-bordered'">
                    <NuxtLink :to="menuItem.path" >{{menuItem.title}}</NuxtLink>
                </li>
            </ul>

        </div>

        <!-- start : PAGE -->
        <div class="w-full pl-64">
            <div class="p-5">
                <slot></slot>
            </div>
        </div>
        <!-- end : PAGE -->

    </div>
</template>

<script setup>

    const menuItems = [

        {path:'/', title :'Acceuil'},
        {path: '/category/head', title:'Tête'},
        {path: '/category/body', title:'Hauts'},
        {path: '/category/other', title:'Autres'},
    ]

    const route = useRoute();

</script>

<style scoped>
    .menu li.hover-bordered a:hover, .menu li.bordered a {
        @apply border-primary-content
    }
</style>


<!-- ici on a pas de fichier pour configurer le routing comme dans Vue 3 donc on doit définir un tableau qui contient
les différents path que l'on souhaite utiliser, c'est ce que l'on fait avec le tableau menuItems
Ensuite on boucle sur ce tableau pour avoir autant de liens qu'il n'y a de chemin dans ce tableau
On navigue ensuite en utilisant un <NuxtLink> qui est un peu l'équivalent du <router-link> dans vue 3 on lui passe le chemin en paramètre -->
