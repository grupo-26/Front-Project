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
      navSize: null,
      title: null,
      linkToVideo: null,
      lessonID: null,
      inicialSetVideo: true,
      modSigla: null,
      activeLesson: null
    }
  },
  created() {
    this.getLessons();
    this.modsigla = this.$route.params.mod;
    this.lessonID = this.$route.params.id;
  },
  methods: {
    changeTitle(text) {
      this.title = text;
    },

    filter(res) {
      let sizeArr = Object.keys(res).length;

      for(let i = 0; i < sizeArr; i++) {
        if(res[i].modsigla == this.modsigla) {
          this.filteredLessons.push({id: res[i].id, aulaid: i+1, title: res[i].title, modsigla: res[i].modsigla, pts: res[i].pts,time: res[i].time,tipo: res[i].tipo, linkvideo: res[i].linkvideo, linkpdf: res[i].linkpdf });
        }
      }
      this.navSize = this.filteredLessons.length;
      this.firstSetLesson();
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

    changeLesson(id) {
      console.log(id);
      id = id-1;
      this.title = this.filteredLessons[id].title; 
      this.linkToVideo = this.filteredLessons[id].linkvideo;
      //console.log('link: ' + this.linkToVideo);
      //this.actvLesson();
      this.actvLesson(id+1);
    },

    firstSetLesson() {
      if(this.inicialSetVideo == true) {
        this.linkToVideo = this.filteredLessons[this.lessonID-1].linkvideo;
        this.title = this.filteredLessons[this.lessonID-1].title;
        this.inicialSetVideo = false;
        this.activeLesson = this.lessonID;
        console.log('first act: ' + this.activeLesson);
      }
    },

    actvLesson(id) {
      this.activeLesson = id;
    }

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

    <div class="mx-9 roboto italic text-list-content mt-[21px]">
      <h1>{{this.$route.params.curso}}</h1>
    </div>

    <div class="nav-aula__link-box">
      <button v-for="i in navSize" :class="{'active-lesson': i == activeLesson}" class="nav-aula__link" @click="changeLesson(i)">{{i}}</button>
    </div>
  </nav>

  <div class="mx-9">
    <div class="mt-[30px] mb-[1rem]">
      <h2 class="roboto font-bold text-[1rem]">{{this.title}}</h2>
    </div>

    <VideoPlayer :link="`${linkToVideo}`" class="mb-[30px]"/>
    
    <div>
      <p class="roboto font-bold text-list-content">Sobre o vídeo: </p>
      <p class="roboto font-list-content text-list-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis quam, 
        varius in quam vitae, luctus lacinia massa. Maecenas aliquet sed nunc id dapibus. 
        Vivamus pretium accumsan mauris ac convallis. 
        Integer molestie metus mi, a aliquet turpis sodales ac. 
      </p>
    </div>

    <div class="flex justify-center mt-6">
      <button class="roboto text-list-content font-bold p-[12px] bg-black text-white">aula concluída</button>
    </div>
    
  </div>

  </section>
</template>


<style scoped>

  .active-lesson {
    background-color: #00d6ac;
  }
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
