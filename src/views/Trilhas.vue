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
            }
        },
        created() {
            this.getCourses();
            console.log(this.coursesBack);
        },
        methods: {
            toCourse(stack, title) {
                //console.log(stack);
                //this.$router.push(`/course/${stack}`);
                //this.$router.push({path:`/course/${stack}`, name: 'course', params: {stack: stack} });
                //this.$router.push({path:`/course/${id}`, name:"course", params: {stack: id, tsc: 'certo'} });
                this.$router.push({name: 'course', params: {stack:stack, title: title} });
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
            }
        },
    }
</script>

<template>
    <Header type="both" logo="true" />

    <div class="mt-[23px]">
        <h2 class="text-title-1 font-bold text-center mb-[23px] inter">Escolha sua trilha</h2>

        <div class="courses-wrap">
            <ListCourses 
                v-for="course in coursesBack"
                :key="course.id"
                :title="course.title"
                :percentage="90"
                class="course"
                @tocourse="toCourse(course.stack, course.title)"
            >
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