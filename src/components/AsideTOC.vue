<template>
    <aside class="size-60 sticky top-32 ml-auto lg:flex flex-col px-10 hidden">
        <div class="font-bold">On this page</div>
        <a v-for="(section, index) in sections" :href="`#${section.id}`" class="p-1 ml-2 hover:bg-black dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-5" :class="{'bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10': index==activeSectionIndex }">{{ getSectionTitle(section) }}</a>
    </aside>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue"

const sections = ref([]);
const activeSectionIndex = ref(null);
const topOffset = 100;

onMounted(() => {
    sections.value = document.querySelectorAll('h2');
    window.addEventListener('scroll', checkActiveSection);
    checkActiveSection();
})
onUnmounted(() => window.removeEventListener('scroll', checkActiveSection));

function checkActiveSection() {

    sections.value.forEach((section,index) => {
        const sectionPosFromTop = section.getBoundingClientRect().top;

        if(isLastSection(index)) {
            if(isAboveOffset(sectionPosFromTop)) {
                activeSectionIndex.value = index
            }
        } else {
            const nextSection = sections.value[index+1];
            const nextSectionPosFromTop = nextSection.getBoundingClientRect().top

            if(isAboveOffset(sectionPosFromTop) && !isAboveOffset(nextSectionPosFromTop)) {
                activeSectionIndex.value = index
            }
            
        }
    })
    function isLastSection(index) {
        return index == sections.value.length-1;
    }
    function isAboveOffset(sectionPosFromTop) {
        return sectionPosFromTop < topOffset;
    }
    
}

function getSectionTitle(section) {
    return section.children[1].innerHTML;
}

</script>