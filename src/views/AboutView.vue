<template>
  <div
    class="lg:h-screen justify-center lg:items-center lg:justify-normal lg:mx-32 lg:my-0 lg:grid lg:grid-cols-2 z-0 lg:py-[72px]"
  >
    <div class="flex justify-center my-12">
      <figure class="size-80 lg:size-96 rounded-full overflow-hidden">
        <div
          class="bg-white size-full flex justify-center items-center text-black text-9xl"
        >
          :P
        </div>
        <!-- <img :src="profilePic" alt="" /> -->
      </figure>
    </div>
    <main
      class="lg:max-w-[50vw] mx-8 mb-12 lg:mb-0 flex flex-col items-center lg:items-start"
    >
      <h1 class="font-bold text-5xl mb-12">About</h1>
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
import EmailLogo from "@/assets/logos/EmailLogo.vue";
import GithubLogo from "@/assets/logos/GithubLogo.vue";
import profilePic from "@/assets/pictures/tails2.jpg";
import Footer from "@/components/Footer.vue"
</script>
