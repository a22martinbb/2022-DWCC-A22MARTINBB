<script>
import Recursos from "./components/Recursos.vue";
import Formulario from "./components/Formulario.vue";

export default {
  data() {
    return {
      componentes: ['Recursos', 'Formulario'],
      currentTab: "",
    };
  },
  components: {
    Recursos,
    Formulario,
  },
};
</script>

<template>
  <div class="appmarti">
    <div class="nav">
      <h2 class="titulo">Recursos</h2>
    </div>
    <div class="options">
      <button v-for="comp in componentes" @click="currentTab = comp">{{ comp }}</button>
    </div>
    <div class="components">
      <component :is="currentTab"></component>
    </div>
  </div>
</template>

<style scoped>

.appmarti{
  display: flex;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  flex-direction: column;
}
.nav {
  height: 6em;
  background-color: rgb(180, 180, 180);
  width: 100%;
  margin: auto;
  display: block;
}

.options {
  padding: 1em;
  display: flex;
  width: 100%;
}

.components {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
</style>
