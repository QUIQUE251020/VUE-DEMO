<script setup>
import { login } from '@/services/authApi'
import { ref } from 'vue';

const user = ref('')
const password = ref('')
const Response = ref('')
async function handleLogin(user,password){
    const data = await login(user,password)
    console.log(data);
    console.log(user, password);
    Response.value = data
}
</script>

<template>
    <p>Usuario</p>
    <input type="text" v-model="user">
    <p>Contraseña</p>
    <input type="text" v-model="password">
    <button @click="handleLogin(user,password)">Iniciar Sesión</button>
    <p>{{ Response }}</p>
</template>