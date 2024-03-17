<template>
    <nav class="*:transition-colors duration-75 flex justify-end sticky lg:fixed right-0 top-0 *:w-40 text-center bg-trueWhite dark:bg-black w-full select-none z-50">
        <div @click="toggleDark()" class="py-6 dark:hover:bg-white hover:bg-black dark:hover:bg-opacity-5 hover:bg-opacity-5 flex justify-center mr-auto cursor-pointer">
            <MoonIcon v-if="isDark"/>
            <SunIcon v-else/>
        </div>
        <RouterLink class="py-6 dark:hover:bg-white hover:bg-black dark:hover:bg-opacity-5 hover:bg-opacity-5" to="/">Home</RouterLink>
        <RouterLink class="py-6 dark:hover:bg-white hover:bg-black dark:hover:bg-opacity-5 hover:bg-opacity-5" to="/about">About</RouterLink>
        <RouterLink class="py-6 dark:hover:bg-white hover:bg-black dark:hover:bg-opacity-5 hover:bg-opacity-5" to="/contact">Contact</RouterLink>
    </nav>
</template>

<script setup>
import { watch } from 'vue'
import MoonIcon from '../assets/icons/MoonIcon.vue'
import SunIcon from '../assets/icons/SunIcon.vue'
import {toggleDark, isDark} from '../utilities/toggleDark.js'


watch(isDark, () => {
    localStorage.theme =  isDark.value ? 'dark' : null
    //when changing light/dark mode, remember the user's choice to avoid FOUC
})

</script>