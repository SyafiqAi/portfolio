<template>
    <section class="mb-32">
        <!-- <a :href="`#${title.toLowerCase()}`">#</a> -->
        <h2 :id="title.toLowerCase()" class="pt-28 -mt-28" @mouseover="showHash = true" @mouseleave="showHash = false">
            <a :href="`#${title.toLowerCase()}`" class="absolute -ml-10 pr-4 transition-opacity hover:underline" :class="{'opacity-0': !showHash}">#</a>
            <span>{{ title }}</span>
        </h2>
        <div class="*:mb-6 lg:max-w-[40vw]">
            <slot></slot>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['title'])
const showHash = ref(false)
</script>
