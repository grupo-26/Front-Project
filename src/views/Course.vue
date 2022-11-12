<script>
    import CourseModule from '../components/CourseModule.vue';

export default {
    components: {
        CourseModule
    },
    data() {
        return {
            value: {},
        }
    },
    mounted() {
        this.road();
    },
    methods: {
        road() {
            if(this.$route.params.stack == 'ux') {
                this.value = [
                    {id: 1, title:"fundamentos ux", stack:"ux" },
                    {id: 2, title:"fundamentos ui", stack:"ux 2"},
                    {id: 3, title:"planos de carreira", stack:"ux 2"}, 
                    {id: 4, title:"fundamentos ui/ux 2", stack:"ux 2"},  
                
                ];
                console.log('ux');
                console.log(this.value);
                //this.value = 'ux';
            }
            else if(this.$route.params.stack == 'dfs') {
                this.value = [
                    {id: 1, title:"Algoritmos", stack:"dfs" },
                    {id: 2, title:"HTTP", stack:"dfs"},
                    {id: 3, title:"GIT", stack:"dfs"}, 
                    {id: 4, title:"html", stack:"dfs"},  
                ];
                console.log('dfs');
                console.log(this.value);
                //this.value = 'dfs';
            }
        }
    }
}

</script>


<template>
    <div>
        <p>Curso id: {{ this.$route.params.stack }}</p>
        <p>Nosso valor: </p>
        <CourseModule :title="'Fundamentos'"></CourseModule>
    </div>
</template>