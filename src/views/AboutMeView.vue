<template>
    <main class="container mx-auto relative z-10">
        <div class="p-2 lg:pt-16 flex gap-2 justify-between">
            <div class="lg:w-2/3 py-5 px-3 lg:px-8 rounded-lg bg-white shadow-md">
                <h2 class="text-xl font-bold text-center lg:text-start">Roberto Mazzarello</h2>
                <h3 class="text-sm pb-5 text-center lg:text-start">Desarrollador Fullstack</h3>
                <div class="space-y-3">
                    <p>Soy desarrollador web con un enfoque en el Frontend. En el año 2021 comencé a estudiar programación, adquiriendo conocimientos en HTML, CSS y JavaScript,
                        Vue2 y Vue3 además de realizar varios cursos de ReactJS y JAVA. Ambas son tecnologías que 
                        me apasionan aunque no he tenido la oportunidad de aplicar profesionalmente.
                    </p>
                    <p> 
                        Llevo diez años trabajando en mi actual empresa, y desde hace un año, me desempeño como 
                        desarrollador Fullstack. La empresa tiene un WMS que está desarrollado en VueJS y Typescript 
                        en el Backend.
                    </p>
                    <p>
                        Actualmente, lidero un equipo de dos personas. En mi rol como líder, asumo la responsabilidad 
                        de planificar y ejecutar mejoras en el sistema, asignar tareas al equipo, brindar orientación y 
                        apoyo en la resolución de problemas técnicos, así como asegurar la calidad del código y su 
                        integración en el repositorio central. Además, mantengo una comunicación cercana con los 
                        clientes finales para identificar y abordar oportunidades de mejora en el sistema.
                    </p>
                </div>
            </div>
            <div v-if="!store.isMobile" class="w-1/3 px-2">
                <img 
                    class="h-100 w-100 rounded-lg shadow"
                    src="/src/assets/img/perfil2.jpg"
                >
            </div>
        </div>
        <div class="pt-5 lg:pt-10 lg:pb-5">
            <h2 class="text-2xl lg:text-4xl font-bold pb-5 flex justify-center text-white">Herramientas que manejo</h2>
            <div class="bg-white rounded-lg shadow-md">
                <p class="text-xl font-bold pt-5 lg:pl-8 text-center lg:text-start">Herramientas con experiencia profesional:</p>
                <ul class="grid grid-cols-2 gap-6 lg:flex lg:gap-1 p-5 lg:p-6">
                    <Card
                        class="lg:mx-auto flex p-2"
                        v-for="tool in profesionalTools"
                        :tool="tool"
                    />
                   
                </ul>
                <p class="text-xl font-bold p-5 lg:pt-8 lg:pl-8 text-center lg:text-start">Herramientas con experiencia de cursos:</p>
                <ul class="grid grid-cols-2 gap-6 lg:flex lg:justify-around px-5 pb-5">
                    <Card
                        class="lg:mx-auto flex p-2"
                        v-for="tool in coursesTools"
                        :tool="tool"
                    />
                </ul>
            </div>
        </div>
    </main>
</template>

<script setup>
    import Card from '@/components/CardTools.vue'
    import { ref } from 'vue'
    import { useStore } from '@/stores/store'

    const profesionalTools = ref([])
    const coursesTools = ref([])


    const store = useStore()
   
    profesionalTools.value = [
        'Javascript',
        'Vue 2',
        'Typescript',
        'MySQL',
        'Vuetify'
    ]

    coursesTools.value = [
        'React',
        'Vue 3',
        'JAVA',
        'MongoDB',
        'TailwindCSS',
        'Bootstrap',
        'Firebase'
    ]
</script>