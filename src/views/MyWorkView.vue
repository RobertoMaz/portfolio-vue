<template>
    <div class="pt-2 lg:pt-20 relative z-10">
        <h1 class="text-4xl font-bold text-center text-white pb-2">Mis Trabrajos</h1>
        <div class="lg:px-4 p-2 space-y-5">
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
            paragraph: 'Esta app tiene una conexión a una API REST que te permite manejar un sistema de inicio de sesión, recuperación de contraseña y confirmación de correo electrónico. Además, permite almacenar las citas que el usuario realice mediante un CRUD. Maneja un sistema de usuario común y usuario ADMIN, y tiene vistas para el ADMIN donde podrá ver las citas del día y las posteriores en orden. Para el usuario, tiene vistas donde puede elegir el tipo de servicio, día y hora del turno.'
            },
            {
            urlWeb : 'https://point-of-sale-weld.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/point-of-sale',
            imageSrc: 'point-of-sale',
            title: 'App Tienda de indumentaria',
            paragraph: 'Esta es una app que te permite administrar una tienda. Está conectada con Firebase, lo cual nos permite hacer un CRUD para los productos, además de tener un módulo de ventas donde hay un calendario para ver el historial de las ventas y un listado con el total del día seleccionado. También tiene la opción de canjear cupones de descuento.'
            },
            {
            urlWeb : 'https://venta-propiedades.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/vue-inmobiliaria',
            imageSrc: 'propiedades',
            title: 'App Venta de propiedades',
            paragraph: 'Esta es una app para administrar la venta de propiedades. Usa Firebase para almacenar las imágenes y los datos de las propiedades. Tiene un sistema de inicio de sesión para un administrador, quien puede hacer un CRUD con las propiedades.'
            },
            {
            urlWeb : 'https://cocktails-search.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/cocktails-vue',
            imageSrc: 'cocktail',
            title: 'App Buscador de recetas para cócteles',
            paragraph: 'Esta es una app que usa la conexión a una API y nos muestra recetas para preparar cócteles, que están organizadas por categoría. Usa local storage para almacenar la información y no perder lo que el usuario estaba buscando o haya guardado en el apartado de favoritos.'
            },
            {
            urlWeb : 'https://customer-client-brown.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/customer-client',
            imageSrc: 'adminclients',
            title: 'App Administrador de clientes',
            paragraph: 'Esta es una app que nos permite administrar una cartera de clientes. En ella, podemos agregar, editar y eliminar clientes que tengamos, además de tener una opción para marcar si siguen activos o no.'
            },
            {
            urlWeb : 'https://weather-finder-eight-chi.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/weather-finder',
            imageSrc: 'weather',
            title: 'App Buscador del clima',
            paragraph: 'Esta app consulta una API que nos proporciona el estado del clima y algunos países para seleccionar. Además, tiene un input donde podemos ingresar una ciudad, y si esa ciudad está en la respuesta de la API, nos muestra el clima de dicha ciudad.'
            },
            {
            urlWeb : 'https://cripto-search.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/cripto-vue',
            imageSrc: 'cripto',
            title: 'App Cotizador de criptomoneda',
            paragraph: 'Esta app consulta una API y nos devuelve la cotización del día de distintos tipos de monedas y criptomonedas.'
            },
            {
            urlWeb : 'https://expense-planner-eta.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/expense-planner',
            imageSrc: 'expense',
            title: 'App Planificador de gastos',
            paragraph: 'Con esta app, podemos planificar los gastos del mes o del día. Nos permite agregar un presupuesto y, después, podemos ir agregando los gastos que vamos teniendo. Tenemos distintas categorías, y a medida que vamos agregando gastos, la app nos muestra la cantidad disponible que tenemos de nuestro presupuesto.'
            },
            {
            urlWeb : 'https://vet-note.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/vet-note',
            imageSrc: 'vet',
            title: 'App Administrador Pacientes Veterinaria',
            paragraph: 'Con esta app, podemos administrar y llevar un registro de los pacientes en una veterinaria, por ejemplo. Podemos agregar nuevos pacientes, editar sus datos y eliminar pacientes cuando sea necesario.'
            },
            {
            urlWeb : 'https://vet-note.vercel.app/',
            urlGithub : 'https://github.com/RobertoMaz/guitar-market',
            imageSrc: 'guitar',
            title: 'App Tienda de guitarras',
            paragraph: 'Esta es una tienda de guitarras donde tenemos varios modelos y un carrito al que podemos ir agregando guitarras. Si seleccionamos la misma guitarra dos veces, se suma una unidad más al carrito, con un límite de hasta 5 por producto.'
            }
        ]
    })

</script>