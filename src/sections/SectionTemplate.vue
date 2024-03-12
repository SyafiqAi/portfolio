<template>
    <section class="mb-16">
        <h2>{{ title }}</h2>
        <div class="*:mb-6 lg:max-w-[40vw]">
            <slot></slot>
        </div>
    </section>
</template>

<script setup>
const props = defineProps(['title'])
</script>
