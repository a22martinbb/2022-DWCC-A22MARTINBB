<!-- 2. Crea un compoñente a reutilizar que conteñan un botón con un contador. Ao pulsar o botón o contador increméntase e actualízase o valor mostrado.
Na aplicación principal engade tres veces o compoñente anterior. ¿O valor do
contador é compartido polos compoñentes? -->

<script>
export default {
  props: {
    name: String,
    tlf: Number,
    mascota: String,
  },  
  data() {
    return {
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
  <div style="border: 1px solid gray; border-radius: 2em; padding: 1em; margin-bottom: 2em;">
    <h2>{{ name }}</h2>
    <div v-show="mostrar">
      <h3>{{ tlf }}</h3>
      <h3>{{ mascota }}</h3>
    </div>
    <div>
      <button @click="hide">Mostrar / Ocultar</button>
    </div>
    
  </div>
</template>
