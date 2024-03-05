<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="*:transition-colors duration-75 flex justify-end">
        <RouterLink class="px-16 py-6 hover:bg-white hover:bg-opacity-5" to="/">home</RouterLink>
        <RouterLink class="px-16 py-6 hover:bg-white hover:bg-opacity-5" to="/about">about</RouterLink>
        <RouterLink class="px-16 py-6 hover:bg-white hover:bg-opacity-5" to="/contact">contact</RouterLink>
      </nav>
    <div>

    </div>
  </header>

  <div class="m-16">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
