<script setup>
import { login } from '@/services/authApi'
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const user = ref('')
const password = ref('')

async function handleLogin(user,password){
    const data = await login(user,password)

    console.log(user, password),
    console.log(data),
    authStore.login(data.username, data.accessToken)
    router.push({name:'saleDetail'})
    
}
</script>

<template>
    <p>Usuario</p>
    <input type="text" v-model="user">
    <p>Contraseña</p>
    <input type="text" v-model="password">
    <button @click="handleLogin(user,password)">Iniciar Sesión</button>
</template>