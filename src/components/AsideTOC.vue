<template>
    <aside class="size-60 sticky top-20 ml-auto box-red">
        <div v-for="(section, index) in sections" :class="{'bg-red-500': index==activeSectionIndex }">{{ section.innerHTML }}</div>
    </aside>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue"

const sections = ref([]);
const activeSectionIndex = ref(null);
const topOffset = 170;

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

</script>