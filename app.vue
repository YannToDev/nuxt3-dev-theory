<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout> 
</template>


<style>
  
  /* transition pour les page */
  .page-enter-from,
  .page-leave-to{

    opacity:0;
  }

  .page-enter-active,
  .page-leave-active{

    transition: opacity 0.3s ease-out
  }

</style>