<template>
    <MainNav />
    <div class="lg:pt-5 mx-auto lg:min-h-screen bg-slate-50">
        <RouterView />
    </div>
    <Footer />
</template>

<script setup>
    import MainNav from '@/components/MainNav.vue'
    import Footer from '@/components/Footer.vue';
</script>