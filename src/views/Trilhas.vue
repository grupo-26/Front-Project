<script>
import ListCourses from '../components/ListCourses.vue';
import router from '../router';
import axios from "axios";

export default {
  components: {
    ListCourses
  },
  data() {
    return {
      coursesBack: {},
      //User Data
      userID: null,
      userProgress: [],
    }
  },
  created() {
    this.getCourses();
    console.log(this.coursesBack);
  },
  mounted() {
    this.userID = this.$route.params.id;
    this.getUserData();
    console.log('User id: ' + this.userID);
  },
  methods: {
    toCourse(stack, title, id, idcurso) {
      this.$router.push({ name: 'course', params: { stack: stack, title: title, iduser: id, idcurso: idcurso } });
    },
    getCourses() {
      axios
        .get("http://localhost:8080/courses")
        .then((res) => {
          this.coursesBack = res.data;
          //console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
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
          //this.coursesBack = res.data;
          console.log(res.data);
          this.addToProgress(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToProgress(res) {
      this.userProgress.push(res.progcurso1);
      this.userProgress.push(res.progcurso2);
      //console.log('progs: ' + this.userProgress);
    }
  },
}
</script>

<template>
  <Header type="menu" logo="true" />

  <div class="mt-[23px] mb-[23px]">
    <h2 class="text-title-1 font-bold text-center mb-[23px] inter">Escolha sua trilha</h2>
    <div class="courses-wrap">
      <ListCourses v-for="(course, index) in coursesBack" :key="course.id" :title="course.title" :percentage="this.userProgress[index]" class="course"
        @tocourse="toCourse(course.stack, course.title, this.userID, course.id)">
      </ListCourses>
    </div>
  </div>

</template>

<style scoped>
.course:nth-child(3n + 3) .course__content .course__content-bg {
  background-color: #F956CE;
}

.course:nth-child(3n + 2) .course__content .course__content-bg {
  background-color: #00D6AC;
}

.courses-wrap {
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  row-gap: 34px;
}

@media screen and (min-width:768px) {

  .courses-wrap {
    grid-template-columns: auto auto;
    column-gap: 40px;
  }
}

@media screen and (min-width:1024px) {

  .courses-wrap {
    grid-template-columns: auto auto auto;
    column-gap: 40px;
    row-gap: 58px;
  }
}
</style>