<script>
export default {
  data() {
    return {
      recursos: [
        {
          titulo: "Servidor Carlos",
          descripcion: "Servicios de alojamiento página web",
          link: "carlos@iessanclemente.net",
          id: "1",
        },
        {
          titulo: "DNS",
          descripcion: "Servidor de DNS del instituto",
          link: "servidor@iessanclemente.net",
          id: "2",
        },
        {
          titulo: "Web Instituto",
          descripcion: "Servidor alojamiento página web del instituo",
          link: "web@iessanclemente.net",
          id: "3",
        },
      ],
    };
    },
    methods: {
        
    }
};
</script>

<template>
    <div class="card" v-for="entrada in recursos">
        <h3>{{ entrada.titulo }}</h3>
        <p>{{ entrada.descripcion }}</p>
        <a href="{{entrada.link}}">{{ entrada.link }}</a>
    </div>
</template>
