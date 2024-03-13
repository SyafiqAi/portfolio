<template>
  <footer class="lg:flex justify-around lg:w-full">
    <a href="https://github.com/SyafiqAi" class="flex items-center">
      <figure class="size-12 inline-block mr-2">
        <GithubLogo />
      </figure>
      SyafiqAi
    </a>

    <br />

    <div class="flex items-center">
      <figure class="size-12 inline-block mr-2">
        <EmailLogo />
      </figure>
      isyafiq@gmail.com
    </div>
  </footer>
</template>
<script setup>
import EmailLogo from "@/assets/logos/EmailLogo.vue";
import GithubLogo from "@/assets/logos/GithubLogo.vue";
</script>
