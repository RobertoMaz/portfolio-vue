<template>
    <div class="px-5 pt-14 relative z-10">
        <div class="justify-center bg-white shadow lg:w-2/4 mx-auto rounded-md">
            <div class=" p-5 w-full">      
                <h1 class="text-4xl font-bold text-center">Contactame</h1>
                <FormKit
                    id="contactForm"
                    type="form"
                    submit-label="Enviar"
                    incomplete-message="No se pudo enviar el correo"
                    @submit="submitHandler"
                    :actions="false"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="name"
                        placeholder="Tu Nombre Completo *"
                        validation="required"
                        :validation-messages="{ required: 'El Nombre es Obligatorio' }"
                    />
                    <FormKit 
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Email *"
                        validation="required|email"
                        :validation-messages="{
                            required: 'El email es obligatorio',
                            email: 'Email no valido'
                        }"
                    />
                    <FormKit 
                        type="textarea"
                        label="TextArea"
                        name="textarea"
                        placeholder="Escribe tu mensaje aquí *"
                        validation="required"
                        :validation-messages="{ required: 'El mensaje no puede estar vacio' }"
                    />
                    <FormKit
                        type="submit"
                    >Enviar</FormKit>
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { inject } from 'vue'
    import { reset } from '@formkit/vue';

    const toast = inject('toast')


    const submitHandler = async (formData) => {

        try {
            const serviceID = import.meta.env.VITE_SERVICE_ID
            const templateID = import.meta.env.VITE_TEMPLATE_ID

            const result = await emailjs.send(serviceID, templateID, formData)
    
            if(result.status === 200) {
                toast.open({
                    message: 'El formulario se envio correctamente.',
                    type: 'success'
                })
                reset('contactForm')
            }
        } catch (error) {
            console.log(error)
            toast.open({
                message: 'Hubo un error, no se pudo enviar el formulario. Intentelo de nuevo.',
                type: 'error'
            })
        }
    }
</script>