<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">
                    Erreur
                </h1>
                <p class="py-6">
                    {{message}}
                </p>
                <button @click="$router.push('/')" class="btn btn-primary">
                    Retourner à l'acceuil
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({

        message:{
            type:String,
            default:'Une erreur est survenue'
        }
    })

</script>
