<script lang="js">
import router from '../router';
import axios from "axios";
import VideoPlayer from "@/components/videoplayer/VideoPlayer.vue";
import NavAula from "@/components/Aula/navAula.vue";
import Header from "@/components/sections/Header.vue";

export default {
  name: "Aula",
  components: {
    VideoPlayer,
    NavAula,
    Header,
  },
  data() {
    return {
      lessonsGeted: {},
      filteredLessons: [],
      navSize: null,
      title: null,
      linkToVideo: null,
      lessonID: null,
      modSigla: null,
      activeLesson: null,
      activeType: null,

      //relationship datas
      userID: null,
      userListaConcluidos: [],
      userProgresso: null,
      userProgressoGeral: null,

      cursoID: null,
      pontosCurso: null,
      btnGray: false,
    }
  },
  created() {
    this.getLessons();
    this.modsigla = this.$route.params.mod;
    this.lessonID = this.$route.params.id;
  },
  mounted() {
    this.userID = this.$route.params.iduser;
    this.cursoID = this.$route.params.idcurso;
    this.pontosCurso = this.$route.params.pts;
    this.getUserData();
    console.log('pontos: ' + this.pontosCurso);
  },
  methods: {
    changeTitle(text) {
      this.title = text;
    },

    filter(res) {
      let sizeArr = Object.keys(res).length;

      for(let i = 0; i < sizeArr; i++) {
        if(res[i].modsigla == this.modsigla) {
          this.filteredLessons.push({id: res[i].id, aulaid: i+1, idconclusao: res[i].idconclusao ,title: res[i].title, modsigla: res[i].modsigla, pts: res[i].pts,time: res[i].time,tipo: res[i].tipo, linkvideo: res[i].linkvideo, linkpdf: res[i].linkpdf });
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
      this.activeType = this.filteredLessons[id].tipo;
      this.actvLesson(id+1);
    },

    firstSetLesson() {
        this.linkToVideo = this.filteredLessons[this.lessonID-1].linkvideo;
        this.title = this.filteredLessons[this.lessonID-1].title;
        this.inicialSetVideo = false;
        this.activeLesson = this.lessonID;
        this.activeType = this.filteredLessons[this.lessonID-1].tipo;
    },

    actvLesson(id) {
      this.activeLesson = id;
    },

    actvLessonPlus(size) {
      if(this.activeLesson < size) {
        this.activeLesson++;
        this.changeLesson(this.activeLesson);
      }
    },

    actvLessonSub() {
      if(this.activeLesson > 1) {
        this.activeLesson--;
        this.changeLesson(this.activeLesson);
      }
    },

    getUserData() {
      //console.log("req: " + "http://localhost:8080/user/" + this.userID);
      axios
        //.get("http://localhost:8080/user/1")
        ({
          method: 'GET',
          url: `http://localhost:8080/user/${this.userID}`
        })
        .then((res) => {
          console.log(res.data);
          this.filterUserData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    
    filterUserData(res) {
      this.userListaConcluidos = res.aulascompletas;
      console.log(res.aulascompletas);
      if(this.cursoID == 1) {
        this.userProgresso = res.progcurso1;
      } else {
        this.userProgresso = res.progcurso2;
      }

      this.userProgressoGeral = res.pontosgeral;
    },

    setPoints(activeIndex) {

      if(this.validaSetPoints(activeIndex)) {
        this.userListaConcluidos.push(this.filteredLessons[activeIndex].idconclusao);
        console.log('lista: ' + this.userListaConcluidos); 
        console.log(this.filteredLessons[activeIndex].idconclusao);

        if(this.userProgresso < 100) {
          this.userProgresso += parseFloat(this.pontosCurso);
          console.log("user progresso: " + this.userProgresso);
        }

        this.userProgressoGeral += this.filteredLessons[activeIndex].pts;
        this.setPointToBD();
        }

    },

    validaSetPoints(activeIndex) {
      for(let i = 0; i < this.userListaConcluidos.length; i++) {
        if(this.filteredLessons[activeIndex].idconclusao == this.userListaConcluidos[i]) {
          return false;
        }
      }
      return true;
    },

    setPointToBD() {
      if(this.cursoID == 1) {
        axios
        .put(`http://localhost:8080/user/${this.userID}`, {
          pontosgeral: this.userProgressoGeral,
          progcurso1: this.userProgresso,
          aulascompletas: this.userListaConcluidos
        })
        .then(() => {
          console.log('Atualizado');
        })
        .catch((error) => {
          console.log(error)
        })
      } else {
        axios
        .put(`http://localhost:8080/user/${this.userID}`, {
          pontosgeral: this.userProgressoGeral,
          progcurso2: this.userProgresso,
          aulascompletas: this.userListaConcluidos
        })
        .then(() => {
          console.log('Atualizado');
        })
        .catch((error) => {
          console.log(error)
        })
      }
    },

  },
}
</script>


<template>
  <Header/>
  
  <section class="section-aula">
    <nav class="nav-aula mt-[28px]"> 
    <div class="nav-aula__btn-box">
      <button class="nav-aula__btn" @click="actvLessonSub">&lt; voltar</button>
      <button class="nav-aula__btn" @click="actvLessonPlus(this.navSize)">avan??ar &gt;</button>
    </div>

    <div class="mx-9 roboto italic text-list-content mt-[21px] md:text-[14px] lg:mt-[0]">
      <h1>{{this.$route.params.curso}}</h1>
    </div>

    <div class="nav-aula__link-box">
      <button v-for="i in navSize" :class="{'active-lesson': i == activeLesson}" class="nav-aula__link" @click="changeLesson(i)">{{i}}</button>
    </div>
  </nav>

  
  <div v-if="this.activeType == 'video'" class="mx-9">
    <div class="mt-[30px] mb-[1rem]">
      <h2 class="roboto font-bold text-[1rem] text-list-module-gray md:text-[1.5rem]">{{this.title}}</h2>
    </div>

    <VideoPlayer :link="`${linkToVideo}`" class="mb-[30px]"/>
    
    <div>
      <p class="roboto font-bold text-list-content md:text-[14px] md:mb-4">Sobre o v??deo: </p>
      <p class="roboto font-list-content text-list-content md:text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis quam, 
        varius in quam vitae, luctus lacinia massa. Maecenas aliquet sed nunc id dapibus. 
        Vivamus pretium accumsan mauris ac convallis. 
        Integer molestie metus mi, a aliquet turpis sodales ac. 
      </p>
    </div>
  </div>

  <div v-if="this.activeType == 'artigo'" class="px-9 lg:px-16">
    <div class="mt-[30px] mb-[1rem]">
      <h2 class="roboto font-bold text-[1rem]">{{this.title}}</h2>
    </div>

    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum turpis eu malesuada dictum. Nullam hendrerit posuere nulla. 
        In et purus sit amet tellus dapibus pulvinar. Vestibulum nec iaculis leo. 
        Morbi sit amet est leo. Ut aliquam ut ligula ut egestas. Integer in sapien massa. 
      </p>

      <p> Aenean sit amet lacus at massa hendrerit euismod. Fusce aliquet erat nisl, eget lobortis odio fermentum efficitur. 
        Quisque eget vestibulum nisl. Cras tristique rhoncus ipsum. Quisque vitae mollis lacus, eu gravida tortor.
         Vestibulum nunc risus, egestas blandit ex sit amet, iaculis malesuada orci. Mauris hendrerit posuere ex et tincidunt. 
         Nullam malesuada turpis id faucibus dignissim.
      </p>

      <p> Pellentesque euismod, nunc at hendrerit ultricies, neque risus aliquam enim, 
        eget tempus justo neque in risus. Suspendisse auctor eros quis mi posuere, 
        sit amet egestas velit ornare. Integer varius lacus tellus. Morbi sit amet 
        tempor lorem. Pellentesque rutrum purus sed lectus tempus malesuada. Aliquam 
        erat volutpat. Maecenas gravida nisi sed rutrum vulputate.
      </p>
    </div>
  </div>

  <div v-if="this.activeType == 'apostila'" class="px-9 lg:px-16">
    <div class="mt-[30px] mb-[1rem]">
      <h2 class="roboto font-bold text-[1rem]">{{this.title}}</h2>
    </div>

    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum turpis eu malesuada dictum. Nullam hendrerit posuere nulla. 
        In et purus sit amet tellus dapibus pulvinar. Vestibulum nec iaculis leo. 
        Morbi sit amet est leo. Ut aliquam ut ligula ut egestas. Integer in sapien massa. 
      </p>

      <p> Aenean sit amet lacus at massa hendrerit euismod. Fusce aliquet erat nisl, eget lobortis odio fermentum efficitur. 
        Quisque eget vestibulum nisl. Cras tristique rhoncus ipsum. Quisque vitae mollis lacus, eu gravida tortor.
         Vestibulum nunc risus, egestas blandit ex sit amet, iaculis malesuada orci. Mauris hendrerit posuere ex et tincidunt. 
         Nullam malesuada turpis id faucibus dignissim.
      </p>

      <p> Pellentesque euismod, nunc at hendrerit ultricies, neque risus aliquam enim, 
        eget tempus justo neque in risus. Suspendisse auctor eros quis mi posuere, 
        sit amet egestas velit ornare. Integer varius lacus tellus. Morbi sit amet 
        tempor lorem. Pellentesque rutrum purus sed lectus tempus malesuada. Aliquam 
        erat volutpat. Maecenas gravida nisi sed rutrum vulputate.
      </p>
    </div>
  </div>

    <div class="flex justify-center px-9 mt-6 md:mt-10 md:mb-8 mb-6 btn__finish md:justify-start">
      <button :class="{'gray': !this.validaSetPoints(this.activeLesson-1)}" @click="setPoints(this.activeLesson-1)" class="roboto text-list-content font-bold p-[12px] bg-black text-white">aula conclu??da</button>
    </div>

  </section>
</template>


<style scoped>

  .gray {
    background-color: rgba(129, 125, 125, 0.719);
  }

  .active-lesson {
    background-color: #00d6ac;
    color: black !important;
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
