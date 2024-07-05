<template>


        <div class="bg-slate-100 rounded-lg shadow-md ">
            <img 
                :src="`./src/assets/img/${imageSrc}.png`" 
                :alt="props.tool" 
                class="w-10" 
                :class="{'w-8 h-8 mt-2': props.tool == 'Vuetify'}"    
            />
            <div class="p-3">
                <p>{{ props.tool }}</p>
            </div>
        </div>
    
</template>

<script setup>
    import { ref } from 'vue'

    const imageSrc = ref('')

    const props = defineProps({
            tool: {
                type: String
            }
        })

        if(props.tool == 'Vue 2' || props.tool == 'Vue 3'){
            imageSrc.value = 'vue'
        } else {
            imageSrc.value = props.tool
        }
 
</script>

