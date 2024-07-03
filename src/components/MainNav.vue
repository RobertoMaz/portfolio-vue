<script setup>
   
</script>

<template>
    <header class="px- py-3 bg-gray-700 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10">
        <div>
            <h1 class="text-xl lg:text-2xl font-black text-slate-100">Roberto Mazzarello</h1>
        </div>
        <nav class="flex items-center text-center gap-3 lg:gap-5 lg:font-bold text-slate-100 uppercase">
            <RouterLink
                to="/"
            >
                <p>inicio</p>
            </RouterLink>
            <RouterLink
                to="about-me"
            >
                <p>Acerca de mi</p>
            </RouterLink>
            <p>mis trabajos</p>
            <p>contacto</p>
        </nav>
    </header>
</template>