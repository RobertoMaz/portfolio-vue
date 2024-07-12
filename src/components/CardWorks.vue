<template>
    <div
        class="rounded bg-white shadow lg:flex"
    >
        <a :href="work.urlWeb" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 w-48 h-48">
            <img 
                :src="`/img/${work.imageSrc}.jpg`"
                :alt="work.imageSrc"
                class="object-cover w-full h-full p-3"
            >
        </a>
        <div class="flex flex-col justify-between flex-grow">
            <div class="px-4 lg:pt-5 lg:pl-5 lg:pr-5">
                <h3 class="text-xl font-black text-gray-500">{{ work.title }}</h3>
                <p class="text-gray-500 font-bold pt-2">{{ work.paragraph }}</p>
            </div>
            <div class="pr-5 lg:pb-5 lg:self-end">
                <p class="grid lg:flex text-gray-500 text-sm font-bold lg: p-4 lg:p-0 lg:pt-2 lg:space-x-9 space-y-4 lg:space-y-0">
                    <a :href="work.urlWeb" target="_blank" rel="noopener noreferrer" class="hover:text-gray-800">Visitar Web</a>
                    <a :href="work.urlGithub" target="_blank" rel="noopener noreferrer" class="hover:text-gray-800">Ver repositorio en GitHub</a>
                    <a v-if="work.urlGithub2" :href="work.urlGithub2" target="_blank" rel="noopener noreferrer" class="hover:text-gray-800">Ver repositorio en Github API</a>
                </p>

            </div>

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