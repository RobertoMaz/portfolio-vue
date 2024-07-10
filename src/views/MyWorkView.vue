<template>
    <div class="pt-20 relative z-10">
        <h1 class="text-4xl font-bold text-center text-white pb-2">Mis Trabrajos</h1>
        <div class="px-4 p-2 space-y-5">
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
            urlGithub : 'https://github.com/RobertoMaz/FrontBarberShop',
            urlGithub2 : 'https://github.com/RobertoMaz/ApiBarberShop',
            imageSrc: 'barberiaapp',
            title: 'App para barberia',
            paragraph: 'Esta App tiene una conexion a una ApiRest la cual te permite manejar un sistema de logueo, recupero de password y confirmacion de email. Ademas de poder almacenar mediante un CRUD las citas que el usuario realice.   Maneja un sistema de usuario comun y usuario ADMIN, tiene vistas para el ADMIN donde podra ver las citas del dia y posteriores en orden. Para el usuario vistas donde puede elegir el tipo de servicio, dia y hora del turno.'
            },
            {
            urlWeb : 'https://point-of-sale-weld.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/point-of-sale',
            imageSrc: 'point-of-sale',
            title: 'App tienda de indumentaria',
            paragraph: 'Esta es una App que te permite administrar una tienda. Esta conectado con Firebase lo cual nos permite hacer un CRUD para los productos, ademas de tener un modulo de ventas donde tenemos un calendario para ver el historial de las ventas y un listado con el total del dia seleccionado. Tambien tiene la opcion de canjear cupones de descuento.'
            },
            {
            urlWeb : 'https://venta-propiedades.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/vue-inmobiliaria',
            imageSrc: 'propiedades',
            title: 'App venta de propiedades',
            paragraph: 'Esta es una App para administrar venta de propiedades. Usa Firebase, para almacenar las imagenes y los datos de las propiedades. Tiene un sistema de logueo para un administrador, el cual puede hacer un CRUD con las propiedades.'
            },
            {
            urlWeb : 'https://cocktails-search.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/cocktails-vue',
            imageSrc: 'cocktail',
            title: 'App para buscar receta de coktails',
            paragraph: 'Esta es una App que usa la coneccion a una Api, y nos muestra recetas para preparar cockteles, estan acomodados por categoria. Usa local storage para almacenar la informacion y no perder lo que el usuario estaba buscando o alla guardado en el apartado de favoritos.'
            },
        ]
    })

</script>