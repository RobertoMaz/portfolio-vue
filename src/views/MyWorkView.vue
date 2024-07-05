<template>
    <div class="pt-20">
        <h1 class="text-4xl font-bold text-center">Mis Trabrajos</h1>
        <div class="p-10 space-y-5">
            <CardWorks 
                v-for="work in works"
                :work="work"
            />
        </div>
    </div>
</template>

<script setup>
    import CardWorks from '@/components/CardWorks.vue'
    import { ref, onMounted } from 'vue'

    const works = ref([])

    onMounted(() => {
        works.value = [
            {
            urlWeb : 'https://front-barber-shop.vercel.app/auth/login',
            imageSrc: 'barberiaapp',
            title: 'App para barberia',
            paragraph: 'Esta app tiene una conexion a una ApiRest la cual te permite manejar un sistema de logueo, recupero de password y confirmacion de email. Ademas de poder almacenar mediante un CRUD las citas que el usuario realice.   Maneja un sistema de usuario comun y usuario ADMIN, tiene vistas para el ADMIN donde podra ver las citas del dia y posteriores en orden. Para el usuario vistas donde puede elegir el tipo de servicio, dia y hora del turno.'
            },
            {
            urlWeb : 'https://front-barber-shop.vercel.app/auth/login',
            imageSrc: 'barberiaapp',
            title: 'App para barberia',
            paragraph: 'Esta app tiene una conexion a una ApiRest la cual te permite manejar un sistema de logueo, recupero de password y confirmacion de email. Ademas de poder almacenar mediante un CRUD las citas que el usuario realice.   Maneja un sistema de usuario comun y usuario ADMIN, tiene vistas para el ADMIN donde podra ver las citas del dia y posteriores en orden. Para el usuario vistas donde puede elegir el tipo de servicio, dia y hora del turno.'
            },
            {
            urlWeb : 'https://front-barber-shop.vercel.app/auth/login',
            imageSrc: 'barberiaapp',
            title: 'App para barberia',
            paragraph: 'Esta app tiene una conexion a una ApiRest la cual te permite manejar un sistema de logueo, recupero de password y confirmacion de email. Ademas de poder almacenar mediante un CRUD las citas que el usuario realice.   Maneja un sistema de usuario comun y usuario ADMIN, tiene vistas para el ADMIN donde podra ver las citas del dia y posteriores en orden. Para el usuario vistas donde puede elegir el tipo de servicio, dia y hora del turno.'
            },
            {
            urlWeb : 'https://front-barber-shop.vercel.app/auth/login',
            imageSrc: 'barberiaapp',
            title: 'App para barberia',
            paragraph: 'Esta app tiene una conexion a una ApiRest la cual te permite manejar un sistema de logueo, recupero de password y confirmacion de email. Ademas de poder almacenar mediante un CRUD las citas que el usuario realice.   Maneja un sistema de usuario comun y usuario ADMIN, tiene vistas para el ADMIN donde podra ver las citas del dia y posteriores en orden. Para el usuario vistas donde puede elegir el tipo de servicio, dia y hora del turno.'
            },
        ]
    })

</script>