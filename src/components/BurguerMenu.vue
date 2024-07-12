<template>
    <div class="relative z-50">
      <div class="flex items-center justify-between p-5 bg-gray-800 text-blue-500">
        <RouterLink 
            to="/"
            class="text-lg font-bold"
        >
            Roberto Mazzarello
        </RouterLink>
        <div>
          <button @click="toggleMenu" class="focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>   
      </div>
      <nav v-if="menuOpen" @click="toggleMenu" class="p-5 absolute w-full bg-gray-700 text-blue-500 space-y-3">
        <RouterLink to="/" class="block py-2 hover:text-blue-800 text-center">Inicio</RouterLink>
        <RouterLink to="about-me" class="block py-2 hover:text-blue-800 text-center">Acerca de mi</RouterLink>
        <RouterLink to="my-work" class="block py-2 hover:text-blue-800 text-center">Mis trabajos</RouterLink>
        <RouterLink to="contact-me" class="block py-2 hover:text-blue-800 text-center">Contacto</RouterLink>
      </nav>
    </div>
  </template>
  
  <script setup>

  import { ref } from 'vue'

  const menuOpen = ref(false)




    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value
    }

  </script>