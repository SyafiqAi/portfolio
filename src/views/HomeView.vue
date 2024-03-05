<script setup>
import Introduction from '../components/Introduction.vue'
import Education from '../components/Education.vue'
import Experience from '../components/Experience.vue'
import Technologies from '../components/Technologies.vue'
</script>

<template>
  <header class="">
    <span class="">Hello, I'm</span>
    <br />
    <h1 class="font-black text-9xl">Syafiq</h1>
  </header>
  <main>
      <Introduction />

      <div class="h-32"></div>
      
      <Education />

      <div class="h-16"></div>

      <Experience />

      <div class="h-16"></div>

      <Technologies />
  </main>
</template>
