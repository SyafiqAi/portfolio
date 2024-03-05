<script setup>
import Introduction from '../components/Introduction.vue'
import Education from '../components/Education.vue'
import Experience from '../components/Experience.vue'
import Technologies from '../components/Technologies.vue'
import GeometryArt from '../assets/GeomteryArt.vue'
import { computed, ref } from 'vue'
import { colors } from '../utilities/colors.js'

const randomColor = ref('white')
function changeColor() {
  randomColor.value = colors[Math.floor(Math.random() * colors.length)];
}

</script>

<template>
  <header class="lg:h-screen flex justify-center mt-32 lg:items-center lg:justify-normal lg:mx-32 lg:my-0 lg:grid lg:grid-cols-2">
    <div class="flex justify-center">
      <div>
        <span>Hello, I'm</span>
        <br />
        <h1 @click="changeColor" :class="`select-none font-black text-8xl mb-6 lg:text-9xl text-00 ${randomColor} duration-1000 transition-colors`">Syafiq</h1>
      </div>
    </div>
    <div class="hidden lg:flex justify-center">
      <figure @click="changeColor" :class="randomColor" class="transition-colors duration-1000">
        <GeometryArt />
      </figure>
    </div>
  </header>
  <main class="m-8 lg:my-16 lg:mx-64">
      <div class="h-16"></div>

      <Introduction />

      <div class="h-16"></div>
      
      <Education />

      <div class="h-16"></div>

      <Experience />

      <div class="h-16"></div>

      <Technologies />
  </main>
</template>
