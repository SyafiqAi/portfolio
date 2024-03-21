<template>
    <nav class="sticky top-0 shadow-md dark:bg-black bg-trueWhite w-full z-10" ref="navbar">
        <div @click="toggleDark()" class="ml-auto p-6 inline-block">
            <MoonIcon v-if="isDark"/>
            <SunIcon v-else/>
        </div>
        <div class="p-6 w-fit transition scale-150 inline-block fixed right-0" :class="{'scale-90': navbarVisible}" @click="toggleNavbar()">
            <BurgerMenuIcon />
        </div>

        <div class="fixed top-0 w-full h-full bg-white dark:bg-black opacity-75" :class="{'hidden': !navbarVisible}" @click="hideNavbar()"></div>

        <div class="flex flex-col fixed backdrop-blur-lg h-dvh right-0 top-0 justify-center" :class="{'hidden': !navbarVisible}" >
            <RouterLink @click.native="toggleNavbar()" class="p-6 w-[50vw] hover:bg-white hover:bg-opacity-5" to="/">Home</RouterLink>
            <RouterLink @click.native="toggleNavbar()" class="p-6 w-[50vw] hover:bg-white hover:bg-opacity-5" to="/about">About</RouterLink>
            <RouterLink @click.native="toggleNavbar()" class="p-6 w-[50vw] hover:bg-white hover:bg-opacity-5" to="/contact">Contact</RouterLink>
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
    //when changing light/dark mode, remember the user's choice to avoid FOUC
})

// disable scrolling when mobile navbar is visible.
// when adding and removing the 'disable-scrollbar' class, 
// the page scrolls to the top.
// we have to manually scroll to the current position
// when adding and removing the class.
let scrollTop;
watch(navbarVisible, () => {
    const html = document.documentElement;
    const body = document.body;
    if(navbarVisible.value) {
        scrollTop = html.scrollTop;
        body.className = `disable-scrollbar`
        body.style.top = `-${scrollTop}px`
        // tailwind doesn't allow dynamic classnames
        // so had to resort to inline style
    } else {
        html.style.scrollBehavior = 'auto';
        body.className = ''
        html.scrollTop = scrollTop;
        html.style.scrollBehavior = 'smooth';
    }
})
</script>
