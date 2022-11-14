<script lang="js">
import router from '../router';
import axios from "axios";
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
  data() {
    return {
      lessonsGeted: {},
      filteredLessons: [],
      title: 'Homem Aranha',
      modSigla: null,
      activeLesson: null
    }
  },
  created() {
    this.getLessons();
    this.modsigla = this.$route.params.mod;
  },
  methods: {
    changeTitle(text) {
      this.titulo = text;
    },

    filter(res) {
      let sizeArr = Object.keys(res).length;

      for(let i = 0; i < sizeArr; i++) {
        if(res[i].modsigla == this.modsigla) {
          this.filteredLessons.push({id: res[i].id, aulaid: i+1, title: res[i].title, modsigla: res[i].modsigla, pts: res[i].pts,time: res[i].time,tipo: res[i].tipo, linkvideo: res[i].linkvideo, linkpdf: res[i].linkpdf });
        }
      }
    },

    async getLessons() {
      try {
        let response = await axios.get('http://localhost:8080/lesson/');
        this.lessonsGeted = response.data;
        console.log(response.data);
        this.filter(this.lessonsGeted);
        return response.data;
      } catch(e) {
        console.log(e);
      }
		},

  },
}
</script>


<template>
  <section class="section-aula">
    <Nav /> 
    <nav class="nav-aula"> 
    <div class="nav-aula__btn-box">
      <button class="nav-aula__btn" @click="$router.go(-1)">&lt; voltar</button>
      <button class="nav-aula__btn">avançar &gt;</button>
    </div>

    <div class="nav-aula__link-box">
      <button class="nav-aula__link" @click="changeTitle('Batman')">1</button> 
      <button class="nav-aula__link" @click="changeTitle('Robin')">2</button> 
    </div>
  </nav>

  <div>
    <h2>Titulo da aula: {{this.title}}</h2>
  </div>

  <div>
    <h1>teste de troca de valores: </h1>
    <p> Titulo: {{titulo}}</p>
  </div>
    <VideoPlayer />

    <p>{{ this.filteredLessons }}</p>
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
