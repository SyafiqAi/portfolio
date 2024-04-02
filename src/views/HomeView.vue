<script setup>
import Introduction from "../sections/Introduction.vue";
import Education from "../sections/Education.vue";
import Experience from "../sections/Experience.vue";
import Technologies from "../sections/Technologies.vue";
import Projects from "../sections/Projects.vue";
import AsideTOC from "../components/AsideTOC.vue"
import GeometryArt from "../assets/figures/GeometryArt.vue";
import Footer from "@/components/Footer.vue"

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
          class="select-none font-black text-8xl mb-6 lg:text-9xl"
        >
          Syafiq
        </h1>
      </div>
    </div>
    <div class="hidden lg:flex justify-center">
      <figure
        class="h-96"
      >
        <GeometryArt />
      </figure>
    </div>
  </header>

  <div class="m-8 lg:my-16 lg:mx-72 lg:grid grid-cols-[15%_70%_15%]">
  <div></div>
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
