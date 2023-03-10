<!-- 2. Crea un compoñente a reutilizar que conteñan un botón con un contador. Ao pulsar o botón o contador increméntase e actualízase o valor mostrado.
Na aplicación principal engade tres veces o compoñente anterior. ¿O valor do
contador é compartido polos compoñentes? -->

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
};
</script>

<template>
    <button @click="num++">{{num}}</button>

</template>
