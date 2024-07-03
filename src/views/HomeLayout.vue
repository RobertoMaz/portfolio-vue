<template>
    <MainNav />
    <div class="lg:pt-5 container mx-auto lg:min-h-screen">
        <RouterView />
    </div>
</template>

<script setup>
    import MainNav from '@/components/MainNav.vue'
    import AboutMe from '@/views/AboutMeView.vue'
</script>