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
                    {id: 6, title: "Redes", percentage: 50 },
                ]
            }
        }
    }
</script>

<template>
    <Header />

    <div>
        <h2 class="text-title-1 font-bold">Escolha sua trilha</h2>
        <ListCourses 
            v-for="course in courses"
            :key="course.id"
            :title="course.title"
            :percentage="course.percentage"
        >

        </ListCourses>
    </div>
    
</template>