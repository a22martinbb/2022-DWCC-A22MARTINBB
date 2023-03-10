<script>
import Informacion from './components/Informacion.vue';
import Formulario from './components/Formulario.vue';

export default {
  // Escribir as opcións do compoñente: data, methods, watch, ...
  data() {
    return {
      nome: 'Martín',
      nacemento: "2000"
    };
  },
  components: {
    Informacion,
    Formulario,
  },
  methods: {
    nameUpdate(nomeActualizado) {
      this.nome = nomeActualizado;
    },
    nacementoUpdate(nacementoActualizado) {
      console.log(nacementoActualizado);
      this.nacemento = nacementoActualizado;
    }
  },
};
</script>



<template>
  <Informacion :name="this.nome" :birth="this.nacemento"></Informacion>
  <Formulario :name="this.nome" :birth="this.nacemento" @nameUpdate="nameUpdate" @nacementoUpdate="nacementoUpdate"></Formulario>
</template>
