<script>

export default {
    data() {
        return {
            titulo: "",
            descripcion: "",
            link: "",
            id: "",
        }
    },
    methods: {
        registro(e) {
            e.preventDefault();
            let objeto = {
                titulo: this.titulo,
                descripcion: this.descripcion,
                link: this.link,
            };
            this.$emit('registro-recurso', objeto);
        }
    }
}

</script>

<template>
    
    <h1>Formulario</h1>
    <form>
      <label for="titulo">Título: </label>
      <input type="text" id="titulo" name="titulo" v-model="titulo"><br><br>

      <label for="descripcion">Descripción: </label>
      <input type="text" id="descripcion" name="descripcion" v-model="descripcion"><br><br>

      <label for="link">Link: </label>
      <input type="text" id="link" name="link" v-model="link"><br><br>

      <input type="submit" value="Enviar" @click="registro">
    </form>
</template>