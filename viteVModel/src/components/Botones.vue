<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    clickBtn(valor) {
      $emit('update:modelValue', valor)  
    }
  }
};
</script>

<template>
  <ul>
    <li>
      <button type="button" :value="modelValue" @click="clickBtn('Vermello')">Vermello</button>
    </li>
    <li>
      <button type="button">Azul</button>
    </li>
    <li>
      <button type="button">Verde</button>
    </li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
