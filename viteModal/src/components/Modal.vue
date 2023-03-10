<script >
export default {

  
}
</script>


<template>
    <div class="modal-mask">
      <div class="modal-container">
        <h1>
            <slot name="modalHead"></slot>
        </h1>
        <h3>
            <slot name="modalBody"></slot>
        </h3>
        <button @click="$emit('show-modal')">Cerrar</button>
      </div>
    </div>
  </template>
  
  <style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
  }
  .modal-container {
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  }
  </style>