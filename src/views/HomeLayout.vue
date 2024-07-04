<template>
    <MainNav />
    <div class="lg:pt-5 mx-auto lg:min-h-screen bg-slate-50">
        <RouterView />
    </div>
</template>

<script setup>
    import MainNav from '@/components/MainNav.vue'
</script>