<script>
import router from '../router';
import axios from "axios";

export default {
  name: 'courseModule',
  props: {
    title: String,
    modsigla: String,
    iduser: String,
    idcurso: String,
  },
  data() {
    return {
      lessonsGeted: {},
      filteredLessons: [],
      totalLessons: 0,
      pointsPerLesson: null,
    }
  },
  created() {
    this.getLessonsRoad();
  },
  methods: {
    filter(res) {
      let sizeArr = Object.keys(res).length;
      let aulaIdCount = 0;

      for(let i = 0; i < sizeArr; i++) {
        if(res[i].modsigla == this.modsigla) {
          aulaIdCount++;
          this.totalLessons++;
          console.log("Total de lições: " + this.totalLessons);
          this.filteredLessons.push({id: res[i].id, aulaid: aulaIdCount, title: res[i].title, modsigla: res[i].modsigla, pts: res[i].pts,time: res[i].time,tipo: res[i].tipo, linkvideo: res[i].linkvideo, linkpdf: res[i].linkpdf });
        }
      }
      this.pointsPerLesson = 100/this.totalLessons;
      console.log('pontos por lição: ' + this.pointsPerLesson);
    },

    toLesson(curso ,mod, id, iduser, idcurso, aulaoriginalid, pts) {
      this.$router.push({name: 'aula', params: {curso: curso, mod: mod, id: id, iduser: iduser, idcurso: idcurso, aulaoriginalid: aulaoriginalid, pts: pts}});
    },

    async getLessonsRoad() {
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
  <div class="max-w-[287px] w-[287px]">
    <div class="course__content-bg bg-[#8C0DAD] w-full pl-4">
      <div class="px-[24px] pt-[15px] pb-[15px] bg-black">
        <p class="title-2 text-white font-bold roboto"> {{ title }} </p>
      </div>
    </div>


    <div class="px-[19px] pt-2">
      <ul>
        <li v-for="lesson in filteredLessons" class="flex justify-between roboto text-list-module-gray" @click="toLesson(this.title, lesson.modsigla, lesson.aulaid, this.iduser, this.idcurso, lesson.id, this.pointsPerLesson)">
          <div class="flex">
            <input type="radio" id="" name="" value="" class="mr-2.5">
            <p class="list-content font-[600] whitespace-nowrap tracking-tighter">{{lesson.title}}</p>
          </div>

          <div class="flex">
            <span class="list-content-type italic mr-5">{{lesson.tipo}}</span>
            <p class="font-[600]">{{lesson.time}}</p>
          </div>
        </li>
      </ul>
    </div>


  </div>
</template>