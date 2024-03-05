<template>
    <nav class="*:transition-colors duration-75 flex justify-end fixed right-0 top-0 *:w-40 text-center bg-trueWhite dark:bg-black w-full">
        <div @click="toggleDark()" class="py-6 dark:hover:bg-white hover:bg-black dark:hover:bg-opacity-5 hover:bg-opacity-5 flex justify-center mr-auto cursor-pointer">
            <MoonIcon v-if="isDark"/>
            <SunIcon v-else/>
        </div>
        <RouterLink class="py-6 dark:hover:bg-white hover:bg-black dark:hover:bg-opacity-5 hover:bg-opacity-5" to="/">home</RouterLink>
        <RouterLink class="py-6 dark:hover:bg-white hover:bg-black dark:hover:bg-opacity-5 hover:bg-opacity-5" to="/about">about</RouterLink>
        <RouterLink class="py-6 dark:hover:bg-white hover:bg-black dark:hover:bg-opacity-5 hover:bg-opacity-5" to="/contact">contact</RouterLink>
    </nav>
</template>

<script setup>
import MoonIcon from '../assets/icons/MoonIcon.vue'
import SunIcon from '../assets/icons/SunIcon.vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)


</script>