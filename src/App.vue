<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="*:transition-colors duration-75 flex justify-end sticky top-0 bg-zinc-950 *:w-40 text-center lg:bg-inherit">
    <RouterLink class=" py-6 hover:bg-white hover:bg-opacity-5" to="/">home</RouterLink>
    <RouterLink class=" py-6 hover:bg-white hover:bg-opacity-5" to="/about">about</RouterLink>
    <RouterLink class=" py-6 hover:bg-white hover:bg-opacity-5" to="/contact">contact</RouterLink>
  </nav>

  <div class="m-8 lg:my-16 lg:mx-64">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
