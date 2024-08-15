<template>
    <div class="relative h-screen lg:h-full lg:overflow-hidden">
        <img 
            src="../assets/img/fondo.jpg" 
            alt="Imagen de fondo" 
            class="absolute object-cover"
            :class="store.imageClasses"    
        >
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        <BurguerMenu v-if="store.isMobile"/>
        <MainNav v-if="!store.isMobile"/>
        <div class="min-h-screen lg:pt-5 lg:mx-auto lg:min-h-screen lg:bg-slate-50">
            <RouterView />
        </div>
        <ButtonUp 
            v-if="store.isVisible"
            @click="store.scrollToTop"
        />
        <Footer />
    </div>
</template>

<script setup>
    import MainNav from '@/components/MainNav.vue'
    import BurguerMenu from '@/components/BurguerMenu.vue'
    import ButtonUp from '@/components/ButtonUp.vue'
    import Footer from '@/components/Footer.vue'
    import { useStore } from '@/stores/store'

    const store = useStore()

</script>