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
            imageSrc: 'barber',
            title: 'App Turnos para barberia ',
            paragraph: 'Esta App tiene una conexion a una ApiRest la cual te permite manejar un sistema de logueo, recupero de password y confirmacion de email. Ademas de poder almacenar mediante un CRUD las citas que el usuario realice.   Maneja un sistema de usuario comun y usuario ADMIN, tiene vistas para el ADMIN donde podra ver las citas del dia y posteriores en orden. Para el usuario vistas donde puede elegir el tipo de servicio, dia y hora del turno.'
            },
            {
            urlWeb : 'https://point-of-sale-weld.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/point-of-sale',
            imageSrc: 'point-of-sale',
            title: 'App Tienda de indumentaria',
            paragraph: 'Esta es una App que te permite administrar una tienda. Esta conectado con Firebase lo cual nos permite hacer un CRUD para los productos, ademas de tener un modulo de ventas donde tenemos un calendario para ver el historial de las ventas y un listado con el total del dia seleccionado. Tambien tiene la opcion de canjear cupones de descuento.'
            },
            {
            urlWeb : 'https://venta-propiedades.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/vue-inmobiliaria',
            imageSrc: 'propiedades',
            title: 'App Venta de propiedades',
            paragraph: 'Esta es una App para administrar venta de propiedades. Usa Firebase, para almacenar las imagenes y los datos de las propiedades. Tiene un sistema de logueo para un administrador, el cual puede hacer un CRUD con las propiedades.'
            },
            {
            urlWeb : 'https://cocktails-search.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/cocktails-vue',
            imageSrc: 'cocktail',
            title: 'App Buscador de recetas para cócteles',
            paragraph: 'Esta es una App que usa la coneccion a una Api, y nos muestra recetas para preparar cócteles, estan acomodados por categoria. Usa local storage para almacenar la informacion y no perder lo que el usuario estaba buscando o alla guardado en el apartado de favoritos.'
            },
            {
            urlWeb : 'https://customer-client-brown.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/customer-client',
            imageSrc: 'adminclients',
            title: 'App Administrador de clientes',
            paragraph: 'Esta es una App que nos permite administrar una cartelera de clientes, en ella podemos agregar, editar y eliminar clientes que tengamos. Ademas de tener una opciona para marcar si siguen activos o no.'
            },
            {
            urlWeb : 'https://weather-finder-eight-chi.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/weather-finder',
            imageSrc: 'weather',
            title: 'App Buscador del clima',
            paragraph: 'Esta App consulta una API, que nos trae el estado del clima y algunos paises para selecciona. Ademas de tener un input dondne podemos colocar una ciudad y si esa ciudad esta en la respuesta de la API nos muestra el clima de dicha ciudad.'
            },
            {
            urlWeb : 'https://cripto-search.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/cripto-vue',
            imageSrc: 'cripto',
            title: 'App Cotizador de criptomoneda',
            paragraph: 'Esta App consulta una API ,y nos devuelve la cotizacion del dia de distintos tipos de monedas y distintos tipos de criptomoneda.'
            },
            {
            urlWeb : 'https://expense-planner-eta.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/expense-planner',
            imageSrc: 'expense',
            title: 'App Planificador de gastos',
            paragraph: 'Con esta App, podemos planificar los gastos del mes, o del dia. Nos permite agregar un presupuesto y despues podemos ir agregando los gastos que vamos teniendo. Tenemos distintas categorias y a medida que vamos agregando gastos, nos va mostranndo la cantidad disponible que tenemos de nuestro presupuesto. '
            },
            {
            urlWeb : 'https://vet-note.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/vet-note',
            imageSrc: 'vet',
            title: 'App Administrador Pacientes Veterinaria',
            paragraph: 'Con esta App, podemos administrar y llevar un registro de los pacientes que tenemos en una veterinaria por ejemplo. Podemos agregar pacientes nuevos, editar sus datos y eliminar al paciente.'
            },
            {
            urlWeb : 'https://vet-note.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/guitar-market',
            imageSrc: 'guitar',
            title: 'App Tienda de guitarras',
            paragraph: 'Esta es una tienda de guitarras, donde tenemos varios modelos y un carrit al cual podemos ir agregandole guitarras. Si seleccionamos la misma guitarra 2 veces, se suma una unidad mas al carrito, con un limite de hasta 5 por producto.'
            }
        ]
    })

</script>