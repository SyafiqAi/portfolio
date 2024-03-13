<template>
  <footer :class="footerStyle">
    <a href="https://github.com/SyafiqAi" class="flex items-center mb-8 lg:mb-0">
      <figure class="size-12 inline-block mr-2">
        <GithubLogo />
      </figure>
      SyafiqAi
    </a>


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
import { ref } from "vue";

const props = defineProps(['responsive'])
const footerStyle = ref('')
if (props.responsive) {
    footerStyle.value = 'lg:flex lg:justify-around lg:w-full'
}

</script>
