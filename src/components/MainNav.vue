<script setup>
   
</script>

<template>
    <header class="px-3 py-3 bg-gray-700 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10">
        <RouterLink to="/">
            <h1 class="text-xl lg:text-2xl font-black text-green-400 hover:text-green-600">Roberto Mazzarello</h1>
        </RouterLink>
        <nav class="flex items-center text-center gap-3 lg:gap-5 lg:font-bold text-green-400 uppercase">
            <RouterLink to="/">
                <p class="hover:text-green-600">inicio</p>
            </RouterLink>
            <RouterLink to="about-me">
                <p class="hover:text-green-600">Acerca de mi</p>
            </RouterLink>
            <RouterLink to="my-work">
                <p class="hover:text-green-600">mis trabajos</p>
            </RouterLink>
            <RouterLink to="contact-me">
                <p class="hover:text-green-600">contacto</p>
            </RouterLink>
        </nav>
    </header>
</template>