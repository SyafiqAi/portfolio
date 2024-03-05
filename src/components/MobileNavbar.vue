<template>
    <nav class="sticky top-0 shadow-md dark:bg-black bg-trueWhite" ref="navbar">
        <div @click="toggleDark()" class="ml-auto p-6 inline-block">
            <MoonIcon v-if="isDark"/>
            <SunIcon v-else/>
        </div>
        <div class="p-6 w-fit transition scale-150 inline-block fixed right-0" :class="{'scale-90': navbarVisible}" @click="toggleNavbar()">
            <BurgerMenuIcon />
        </div>

        <div class="flex flex-col transition absolute backdrop-blur-lg h-dvh right-0" :class="{'opacity-0': !navbarVisible}" >
            <RouterLink @click.native="toggleNavbar()" class="p-6 w-[50vw] hover:bg-white hover:bg-opacity-5" to="/">home</RouterLink>
            <RouterLink @click.native="toggleNavbar()" class="p-6 w-[50vw] hover:bg-white hover:bg-opacity-5" to="/about">about</RouterLink>
            <RouterLink @click.native="toggleNavbar()" class="p-6 w-[50vw] hover:bg-white hover:bg-opacity-5" to="/contact">contact</RouterLink>
        </div>
    </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { onClickOutside } from '@vueuse/core'
import BurgerMenuIcon from '../assets/icons/BurgerMenuIcon.vue'
import SunIcon from "@/assets/icons/SunIcon.vue";
import MoonIcon from "@/assets/icons/MoonIcon.vue";
import {toggleDark, isDark} from '../utilities/toggleDark.js'

const navbarVisible = ref(false)
function toggleNavbar() {
    navbarVisible.value = !navbarVisible.value
}
function hideNavbar() {
    if (navbarVisible.value) {
        toggleNavbar();
    }
}

const navbar = ref(null)
onClickOutside(navbar, () => hideNavbar())

watch(isDark, () => {
    localStorage.theme =  isDark.value ? 'dark' : null
})
</script>
