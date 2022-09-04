<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout> 
</template>




<!-- composant principal par lequel tout passe, quand on a un layout global comme ici, il doit englober
le composant <NuxtPage> -->

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