<template>
    <div class="containenr h-screen">
        <img 
            src="../assets/img/fondo.avif" 
            alt="Imagen de fondo" 
            class="absolute inset-0"
            :class="imageClasses"    
        >
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        <MainNav />
        <div class="lg:pt-5 mx-auto lg:min-h-screen bg-slate-50">
            <RouterView />
        </div>
        <Footer />
    </div>
</template>

<script setup>
    import MainNav from '@/components/MainNav.vue'
    import Footer from '@/components/Footer.vue'
    import { useRoute } from 'vue-router'
import { computed } from 'vue';

    const route = useRoute()

   

    const imageClasses = computed(() => {
        const currentRoute = route.name
        if (currentRoute === 'about-me' || currentRoute === 'my-work') {
            return 'pt-14'
        } else {
            return 'w-full h-full'
        }
    })
</script>