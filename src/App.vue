<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DesktopNavbar from './components/DesktopNavbar.vue'
import MobileNavbar from './components/MobileNavbar.vue'

 function isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }

</script>

<template>

  <DesktopNavbar v-if="!isMobile()"/>
  <MobileNavbar v-else />
  
  <div class="m-8 lg:my-16 lg:mx-64">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
