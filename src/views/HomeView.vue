<script setup>
import Introduction from "../sections/Introduction.vue";
import Education from "../sections/Education.vue";
import Experience from "../sections/Experience.vue";
import Technologies from "../sections/Technologies.vue";
import Projects from "../sections/Projects.vue";
import AsideTOC from "../components/AsideTOC.vue"
import GeometryArt from "../assets/figures/GeometryArt.vue";
import { ref } from "vue";
import { changeColor } from "../utilities/colors.js";
import GithubLogo from "@/assets/logos/GithubLogo.vue";
import EmailLogo from "@/assets/logos/EmailLogo.vue";
import Footer from "@/components/Footer.vue"

const color = ref("");
</script>

<template>
  <header
    class="lg:h-screen flex justify-center my-32 lg:items-center lg:justify-normal lg:mx-32 lg:my-0 lg:grid lg:grid-cols-2 lg:py-[72px]"
  >
    <div class="flex justify-center">
      <div>
        <span>Hello, I'm</span>
        <br />
        <h1
          @click="
            () => {
              color = changeColor();
            }
          "
          :class="color"
          class="select-none font-black text-8xl mb-6 lg:text-9xl duration-500 transition-colors"
        >
          Syafiq
        </h1>
      </div>
    </div>
    <div class="hidden lg:flex justify-center">
      <figure
        @click="
          () => {
            color = changeColor();
          }
        "
        :class="color"
        class="transition-colors duration-500 h-96"
      >
        <GeometryArt />
      </figure>
    </div>
  </header>

  <div class="m-8 lg:my-16 lg:mx-72 lg:grid grid-cols-[80%_20%]">
  <main class="">

    
    <Introduction />

    <Education />

    <Experience />

    <Technologies />

    <Projects />

  </main>

    <AsideTOC />
    
  </div>


  <div
    class="h-64 w-full flex items-center justify-center border-t mt-32"
  >
  <Footer :responsive="true"></Footer>

  </div>
</template>
