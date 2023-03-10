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
    name() {
      this.nome = this.name;
    },
    birth() {
      this.nacemento = this.birth;
    }
  }
};
</script>

<template >
  <div class="card">
    <h3>{{ this.nome }}</h3>
    <h5>{{ this.nacemento }}</h5>
  </div>
</template>


<style >
.card {
  border: 1px solid gray;
  border-radius: 20px;
  margin-bottom: 2em;
}
</style>