
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const token = ref(null)
    const isAuthenticated = computed(() => !!token.value)

    function login(newUser, newToken) {
        user.value = newUser
        token.value = newToken
    }

    function logout(){
        username.value = null
        token.value = null
    }

    return{
        user,
        token,
        isAuthenticated,
        login,
        logout
    }
})