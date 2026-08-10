<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
  const contador = ref(0)
  const nombre = ref('')
  const numero = ref()
  function aumentar(cantidad=1){
    const valor = Number(cantidad)

    if (Number.isNaN(valor)) return

    contador.value += Number(cantidad)
  }

</script>

<template>
   <RouterView />
</template>

<style scoped></style>
