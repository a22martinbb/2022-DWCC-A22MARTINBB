<!-- 1. Utilizando compoñentes, crea unha aplicación que teña un compoñente con unha propiedade que sexa unha mensaxe de texto, por exemplo “ola mundo”. Engade á
aplicación un botón para intercambiar a mensaxe entre maiúsculas/minúsculas.
Engade outro botón que permita engadir un carácter, por exemplo “!” á mensaxe de
texto -->

<script>
export default {
  data() {
    return {
      mensaje: "ola mundo",
      checkCaps: false,
    };
  },
  methods: {
    swapCaps() {
      if (this.checkCaps == true) {
        this.mensaje = this.mensaje.toLowerCase();
        this.checkCaps = false;
      } else {
        this.mensaje = this.mensaje.toUpperCase();
        this.checkCaps = true;
      }
    },
    exclama() {
      this.mensaje += "!";
    }
  },
};
</script>

<template>
  <h2>{{ mensaje }}</h2>
  <button @click="swapCaps">Mayus/Minus</button><br><br>
  <button @click="exclama">Exclama</button>

</template>
