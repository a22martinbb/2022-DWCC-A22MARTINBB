<!-- 2. Crea un compoñente a reutilizar que conteñan un botón con un contador. Ao pulsar o botón o contador increméntase e actualízase o valor mostrado.
Na aplicación principal engade tres veces o compoñente anterior. ¿O valor do
contador é compartido polos compoñentes? -->

<script>
export default {
  data() {
    return {
      user: { nome: "Alba", tlf: "698120891", mascota: "Momo" },
      mostrar: false,
    };
  },
  methods: {
    hide() {
      this.mostrar == false ? this.mostrar = true : this.mostrar = false;
    }
  }
};
</script>

<template>
  <div style="border: 1px solid gray; border-radius: 2em; padding: 1em;">
    <h2>{{ user.nome }}</h2>
    <div v-show="mostrar">
      <h3>{{ user.tlf }}</h3>
      <h3>{{ user.mascota }}</h3>
    </div>
    <button @click="hide">Mostrar / Ocultar</button>
  </div>
</template>
