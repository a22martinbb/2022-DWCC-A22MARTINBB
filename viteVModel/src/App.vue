<script>
import Botones from './components/Botones.vue';

export default {
  data() {
    return {
      proba: "Proba",
    }
  },
  components: {
    Botones,
  },
  methods: {
    update() {
      console.log(this.proba)
    }
  }
}
</script>

<template>

  <Botones v-model="proba"/>

  <button @click="update">Update</button>
</template>

