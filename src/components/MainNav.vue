<script setup>

import { useNavStore } from '@/stores/navStore'
import { computed } from 'vue'

const navStore = useNavStore()

const getLinkClass = (routeName) => {
  return computed(() => {
    return navStore.activeRoute === routeName ? 'text-blue-700' : 'hover:text-blue-700'
  }).value
}
</script>

<template>
    <header class="px-3 py-3 bg-gray-800 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-50">
        <RouterLink to="/">
            <h1 class="text-xl lg:text-2xl font-black text-blue-500 hover:text-blue-700">Roberto Mazzarello</h1>
        </RouterLink>
        <nav class="flex items-center text-center gap-3 lg:gap-5 lg:font-bold text-blue-500 uppercase">
            <RouterLink to="/">
                <p 
                    class="hover:text-blue-700"
                    :class="getLinkClass('homeView')"
                >inicio</p>
            </RouterLink>
            <RouterLink to="about-me">
                <p 
                    class="hover:text-blue-700"
                    :class="getLinkClass('about-me')"
                >Acerca de mi</p>
            </RouterLink>
            <RouterLink to="my-work">
                <p 
                    class="hover:text-blue-700"
                    :class="getLinkClass('my-work')"  
                >mis trabajos</p>
            </RouterLink>
            <RouterLink to="contact-me">
                <p 
                    class="hover:text-blue-700"
                    :class="getLinkClass('contact-me')"
                >contacto</p>
            </RouterLink>
        </nav>
    </header>
</template>