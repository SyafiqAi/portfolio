<template>
  <div
    class="lg:h-screen justify-center my-[30vw] lg:items-center lg:justify-normal lg:mx-32 lg:my-0 lg:grid lg:grid-cols-2 lg:py-[72px]"
  >
    <header class="flex justify-center">
      <div>
        <h1
          class="select-none font-black text-8xl mb-16 lg:mb-0 lg:text-9xl duration-100 transition-colors text-center"
        >
          Let's get in touch!
        </h1>
      </div>
    </header>
    <div class="flex justify-center">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import EmailLogo from "@/assets/logos/EmailLogo.vue";
import GithubLogo from "@/assets/logos/GithubLogo.vue";
import Footer from "@/components/Footer.vue"
</script>