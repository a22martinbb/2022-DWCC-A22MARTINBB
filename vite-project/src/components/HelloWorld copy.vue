<template>
  <div>
    <h1>Lista de Contatos</h1>
    <button @click="exibirFormulario">Adicionar Contato</button>
    <NovoContato v-if="mostrarFormulario" @novo-contato="adicionarContato"></NovoContato>
    <Contato v-for="(contato, index) in contatos" :key="index" :name="contato.nome" :tlf="contato.telefone" :mascota="contato.animal" :favorito="contato.favorito" @cambia-favorito="cambiarFavorito(index)"></Contato>
  </div>
</template>

<script>
import Contato from './components/Contato.vue';
import NovoContato from './components/NovoContato.vue';

export default {
  components: {
    Contato,
    NovoContato
  },
  data() {
    return {
      mostrarFormulario: false,
      contatos: [
        { nome: 'João', telefone: '123456789', animal: 'Cachorro', favorito: false },
        { nome: 'Maria', telefone: '987654321',

