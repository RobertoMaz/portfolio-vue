<template>
    <div
        class="rounded bg-white shadow flex"
    >
        <a :href="work.urlWeb" target="_blank" rel="noopener noreferrer">
            <img 
                :src="`../src/assets/img/${work.imageSrc}.png`"
                :alt="work.imageSrc"
                class="p-5"
            >
        </a>
        <div class="p-5">
            <h3 class="text-xl font-black text-gray-500">{{ work.title }}</h3>
            <p class="text-gray-500 font-bold pt-2">{{ work.paragraph }}</p>
        </div>
    </div>
    
</template>

<script setup>

    defineProps({
        work: {
            type: Object
        }
    })


</script>