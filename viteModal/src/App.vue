<script>
import Modal from "./components/Modal.vue";

export default {
  data() {
    return {
      show: false,
    }
  },
  components: {
    Modal,
  },
  methods: {
    showModal() {
      this.show = !this.show;
    }
  }
};
</script>

<template>
  <button @click="showModal">Open Modal</button>
  <Modal v-show="show" @show-modal="showModal">
    <template #modalHead>Head Modal</template>
    <template #modalBody>Cuerpo del modal mandado desde App.vue</template>
  </Modal>
</template>

