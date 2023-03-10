<!-- Engade á aplicación do exercicio anterior un novo compoñente que conteña un formulario para dar de alta un novo contacto. Engade este novo compoñente ao compoñente raíz da aplicación e fai a implementación necesaria para que ao dar de alta un novo  contacto, se engada á lista de contactos do compoñente raíz. -->

<script>
export default {
  data() {
    return {
      novoContacto: {
        name: '',
        tlf: '',
        mascota: '',
        favorito: false
      }
    };
  },
  methods: {
    añadirContacto(e) {
      e.preventDefault();
      this.$emit('novo-contato', this.novoContacto);
    }
  }
};
</script>

<template>
  <div>
    <h2>Novo Contato</h2>
    <form @submit.prevent="añadirContacto">
      <div>
        <label for="name">Nombre: </label>
        <input type="text" id="name" v-model="this.novoContacto.name" required>
      </div>
      <div>
        <label for="tlf">Telefono: </label>
        <input type="text" id="tlf" v-model="this.novoContacto.tlf" required>
      </div>
      <div>
        <label for="mascota">Mascota: </label>
        <input type="text" id="mascota" v-model="this.novoContacto.mascota">
      </div>
      <div>
        <label for="favorito">Favorito: </label>
        <input type="checkbox" id="favorito" v-model="this.novoContacto.favorito">
      </div>
      <button type="submit" @click="añadirContacto" >Añadir</button>
    </form>
  </div>
</template>

