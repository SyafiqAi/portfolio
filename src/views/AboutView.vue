<template>
  <div
    class="lg:h-screen flex justify-center lg:items-center lg:mx-32 lg:my-0 z-0"
  >
    <main
      class="lg:max-w-[50vw] mx-8 mb-12 lg:mb-0 flex flex-col items-center lg:items-start"
    >
      <h1 class="font-bold text-8xl my-12">About</h1>
      <section class="mb-12">
        <p>
          I am Syafiq Aiman and I am a student with an interest in web
          development. I first became interested in this field during my
          internship at DSM where I had the opportunity to learn and work with
          Vue.
        </p>
        <br />
        <p>
          I have an affinity for coding and enjoy working on projects that
          challenge me to learn new things. Outside of programming, I also have
          interests in music.
        </p>
        <br />
        <p>
          My goal is to learn and gain experience and I believe that working on
          projects outside of school is an important step in achieving that
          goal. I am always eager to learn and improve my skills and I look
          forward to engaging and collaborating with fellow programmers and
          developers in the future.
        </p>
      </section>

      <Footer :responsive="true"></Footer>
    </main>
  </div>
</template>

<script setup>
import Footer from "@/components/Footer.vue"
</script>
