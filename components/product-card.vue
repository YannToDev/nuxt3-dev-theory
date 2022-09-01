<!-- composant pour afficher un produit donné sous forme de card -->

<template>
    <div 
        class="card card-compact lg:card-normal w-full bg-base-100 shadow-xl cursor-pointer"
        @mouseover="isHovering= true"
        @mouseleave="isHovering=false"
    >
        <figure class="overflow-hidden">
            <img :class="isHovering? 'scale-110' :''" class="transition-transform duration-500" :src="imgSrc" alt="Shoes" />
        </figure>
        <div class="card-body">
            <p> 
                <span class="relative">
                    {{name}}
                    <span :class="isHovering? 'w-full' : 'w-0'" class="absolute bottom-0 left-0 w-full h-[1px] bg-base-content duration-500">

                    </span>
                </span>
            </p>
            <h2 class="card-title">{{price}}€</h2>
        </div>
    </div>
</template>

<script setup>

    let isHovering = ref(false);

    const props = defineProps({

        name:{
            type: String,
            required: true
        },

        price :{
            type:Number,
            required: true
        },

        imgSrc :{
            type: String,
            required:true
        }
    })

</script>

<style lang="scss" scoped>

</style>

<!-- le p est en display block alors que le span est en inline car le trait fera 100% de l'élément parent
 donc si on a un p cela va faire toute la largeur de la carte ce qu'on ne veut pas on veut juste prendre le texte-->