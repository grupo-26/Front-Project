<script>
    import CourseModule from '../components/CourseModule.vue';

export default {
    data() {
        return {
            modules: {},
        }
    },
    components: {
        CourseModule
    },
    mounted() {
        this.road();
    },
    methods: {
        road() {
            if(this.$route.params.stack == 'ux') {
                this.modules = [
                    {id: 1, title:"fundamentos ux", stack:"ux" },
                    {id: 2, title:"fundamentos ui", stack:"ux 2"},
                    {id: 3, title:"planos de carreira", stack:"ux 2"}, 
                    {id: 4, title:"fundamentos ui/ux 2", stack:"ux 2"},  
                
                ];
                console.log('ux');
                console.log(this.modules);
                //this.value = 'ux';
            }
            else if(this.$route.params.stack == 'dfs') {
                this.modules = [
                    {id: 1, title:"Algoritmos", stack:"dfs" },
                    {id: 2, title:"HTTP", stack:"dfs"},
                    {id: 3, title:"GIT", stack:"dfs"}, 
                    {id: 4, title:"html", stack:"dfs"},  
                ];
                console.log('dfs');
                console.log(this.modules);
                //this.value = 'dfs';
            }
        }
    }
}

</script>


<template>
    <div>

        <div class="modules-wrap flex flex-col items-center">
            <CourseModule
                v-for="module in modules"
                :title="module.title"
                class="mb-[20px]"
            >
            </CourseModule>
        </div>

    </div>
</template>