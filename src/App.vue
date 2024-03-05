<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="my-6">
        <RouterLink class="pl-8 pr-16 hover:underline" to="/">Home</RouterLink>
        <RouterLink class="p-16 hover:underline" to="/about">About</RouterLink>
        <RouterLink class="p-16 hover:underline" to="/contact">Contact</RouterLink>
      </nav>
    <div>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
