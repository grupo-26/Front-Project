<script>
    import ListCourses from '../components/ListCourses.vue';

    export default {
        components: {
          ListCourses
        },
        data() {
            return {
                courses: [
                    {id: 1, title: "Desenvolvimento Full Stack", percentage: 50.25 },
                    {id: 2, title: "UX/UI Design", percentage: 40 },
                    {id: 3, title: "Quality Assurance", percentage: 25 },
                    {id: 4, title: "Dev Front-end", percentage: 10 },
                    {id: 5, title: "Dev Back-end", percentage: 5 },
                    {id: 6, title: "Redes", percentage: 90 },
                ]
            }
        }
    }
</script>

<template>
    <Header />

    <div class="mt-[23px]">
        <h2 class="text-title-1 font-bold text-center mb-[23px] inter">Escolha sua trilha</h2>
        <div class="courses-wrap flex flex-col items-center">
            <ListCourses 
            v-for="course in courses"
            :key="course.id"
            :title="course.title"
            :percentage="course.percentage"
            class="mb-[34px] course"
        >
        </ListCourses>
        </div>
    </div>
    
</template>

<style>

.course:nth-child(3n + 3) .course__content .course__content-bg {
    background-color: #F956CE;
}

.course:nth-child(3n + 2) .course__content .course__content-bg {
    background-color: #00D6AC;
}

</style>