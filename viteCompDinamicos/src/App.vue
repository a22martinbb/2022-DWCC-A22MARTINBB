<script>
import Contador from "./components/Contador.vue";
import Caixa from "./components/Caixa.vue";

export default {
  data() {
    return {
      currentTab: "",
      comps: ["Contador", "Caixa"],
    };
  },
  components: {
    Contador,
    Caixa,
  },
};
</script>

<template>
  <div v-for="comp in comps">
    <input id="componentes" name="componentes" type="radio" :value="comp" @click="currentTab = comp"/>
    <label >{{ comp }} </label>
  </div>
  <KeepAlive>
    <component :is="currentTab"></component>
  </KeepAlive>
  
</template>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
