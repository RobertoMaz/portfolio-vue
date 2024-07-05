<template>
    <div class="p-16">
        <div class="justify-center bg-white shadow w-2/4 mx-auto rounded-md">
            <div class=" p-5 w-full">      
                <h1 class="text-4xl font-bold text-center">Contactame</h1>
                <FormKit
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
                        placeholder="Nombre*"
                        validation="required"
                        :validation-messages="{ required: 'El Nombre es Obligatorio' }"
                    />
                    <FormKit 
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Email*"
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
                        placeholder="Escribe tu mensaje aquí*"
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

    const submitHandler = async (formData) => {

        console.log(formData)
    }
</script>