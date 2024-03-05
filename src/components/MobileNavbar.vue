<template>
    <nav class="sticky top-0 shadow-md bg-black" ref="navbar">
        <div class="p-6 w-fit transition scale-150" :class="{'scale-90': navbarVisible}" @click="toggleNavbar()">
            <BurgerMenuIcon />
        </div>
        <div class="flex flex-col transition absolute backdrop-blur-lg h-dvh" :class="{'-translate-x-full': !navbarVisible}" >
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
</script>
