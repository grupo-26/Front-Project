<script lang="js">
import VideoPlayer from "@/components/videoplayer/VideoPlayer.vue";
import NavAula from "@/components/Aula/navAula.vue";
import Nav from "@/components/Nav/Nav.vue";

export default {
  name: "Aula",
  components: {
    VideoPlayer,
    NavAula,
    Nav
  },
  created() {

  },
  data() {
    return {
      titulo: 'Homem Aranha',
    }
  },
  methods: {
    changeTitle(text) {
      this.titulo = text;
    },
  },
}
</script>


<template>
  <section class="section-aula">
    <Nav /> 

    <nav class="nav-aula"> 
    <div class="nav-aula__btn-box">
      <button class="nav-aula__btn">&lt; voltar</button>
      <button class="nav-aula__btn">avançar &gt;</button>
    </div>

    <div class="nav-aula__link-box">
      <button class="nav-aula__link" @click="changeTitle('Batman')">1</button> 
      <button class="nav-aula__link" @click="changeTitle('Robin')">2</button> 
    </div>
  </nav>
  <div>
    <h1>teste de troca de valores: </h1>
    <p> Titulo: {{titulo}}</p>
  </div>
    <VideoPlayer />
  </section>
</template>


<style scoped>
  .nav-aula__btn-box {
    @apply flex flex-row justify-between;
    @apply px-5;
    @apply md:justify-end;
    @apply md:mt-6;
  }

  .nav-aula__btn {
    @apply font-sans font-medium;
  }

  .nav-aula__btn:not(:last-child) {
    @apply md:mr-2;
  }

  .nav-aula__link-box { 
    @apply bg-black;

    @apply w-screen;
    @apply px-5;
    @apply mt-2;

    @apply flex flex-row justify-start;
  }

  .nav-aula__link {
    @apply font-bold text-white;
    @apply p-2;

    font-size: 0.875rem;
  }
</style>
