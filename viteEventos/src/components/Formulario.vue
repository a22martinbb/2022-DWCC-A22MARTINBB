<script>
export default {
  data() {
    return {
      nome: this.name,
      nacemento: this.birth,
    };
  },
  props: {
    name: String,
    birth: String,
  },

  
  watch: {
    nome() {
      this.$emit('nameUpdate', this.nome)
    },
    nacemento() {
      this.$emit('nacementoUpdate', this.nacemento)
    }
  }
};
</script>

<template>
  <form>
    <label for="nome">Nombre: </label>
    <input type="text" id="name" v-model="this.nome">
    <br>
    <label for="nacemento">Nacemento: </label>
    <input type="text" id="nacemento" v-model="this.nacemento">
  </form>
</template>
