<script>
import ExercicioCinco from "./components/ExercicioCinco.vue";
import ExercicioCincoForm from "./components/ExercicioCincoForm.vue";

export default {
  // Escribir as opcións do compoñente: data, methods, watch, ...
  data() {
    return {
      array: [
        { "name": "Martín", "tlf": 698120891, "mascota": "Duna", "favorito": true },
        { "name": "Inés", "tlf": 654550163, "mascota": "Mico", "favorito": false },
        { "name": "Antía", "tlf": 636982412, "mascota": "Cagón", "favorito": false },
      ]
    };
  },
  // rexistro do compoñente
  components: {
    ExercicioCinco,
    ExercicioCincoForm,
  },
  methods: {
    cambiaFavorito(telefono) {
      let entrada = this.array.filter(entry => entry.tlf == telefono);
      entrada[0].favorito = !entrada[0].favorito;
    },
    añadirContacto(contacto) {
      this.array.push(contacto);
    }
  },
};
</script>

<template>
  
  <ExercicioCinco v-for="user in array" :name="user.name" :tlf="user.tlf" :mascota="user.mascota" :favorito="user.favorito" @cambia-favorito="cambiaFavorito(user.tlf)"></ExercicioCinco>

  <ExercicioCincoForm @novo-contato="añadirContacto"></ExercicioCincoForm>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
