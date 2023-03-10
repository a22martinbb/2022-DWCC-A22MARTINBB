<script>
export default {
  data() {
    return {
      inputValue: "Texto asdf..."
    };
  }
};
</script>

<template>
    <div>
      <input type="text" v-model="inputValue"/>
      <p>{{ inputValue }}</p>
    </div>
  </template>
  
