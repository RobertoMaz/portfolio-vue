<template>
    <div class="relative h-screen lg:h-full lg:overflow-hidden">
        <img 
            src="../assets/img/fondo.avif" 
            alt="Imagen de fondo" 
            class="absolute object-cover"
            :class="imageClasses"    
        >
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        <BurguerMenu v-if="isMobile"/>
        <MainNav v-if="!isMobile"/>
        <div class="min-h-screen lg:pt-5 lg:mx-auto lg:min-h-screen lg:bg-slate-50">
            <RouterView />
        </div>
        <Footer />
    </div>
</template>

<script setup>
    import MainNav from '@/components/MainNav.vue'
    import BurguerMenu from '@/components/BurguerMenu.vue'
    import Footer from '@/components/Footer.vue'
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'

    const route = useRoute()

   

    const imageClasses = computed(() => {
        const currentRoute = route.name
        if (currentRoute === 'about-me' || currentRoute === 'my-work') {
            return 'pt-14'
        } else {
            return 'w-full h-full'
        }
    })

    const isMobile = computed(() => {
        const width = window.innerWidth
        return width < 1024 
    })
</script>