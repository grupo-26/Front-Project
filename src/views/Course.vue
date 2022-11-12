<script>
import CourseModule from '../components/CourseModule.vue';
import router from '../router';
import axios from "axios";


export default {
	components: {
		CourseModule
	},
	data() {
		return {
      modulesGeted: {},
      filteredModules: [],
      routerStack: null,
      course:  null
		}
	},
	created() {
    this.getRoadBack();
    this.routerStack = this.$route.params.stack;
	},

	methods: {
    filter(res) {
      let sizeArr = Object.keys(res).length;

      for(let i = 0; i < sizeArr; i++) {
        if(res[i].stack == this.routerStack) {
          this.filteredModules.push({id: res[i].id, title: res[i].title, stack: res[i].stack, modsigla: res[i].modsigla});
        } 
      }
    },

		async getRoadBack() {
      try {
        let response = await axios.get('http://localhost:8080/module/');
        this.modulesGeted = response.data;
        console.log(response.data);
        this.filter(this.modulesGeted);
        return response.data;
      } catch(e) {
        console.log(e);
      }
		},
	}
}
</script>


<template>
	<div>
		<Header :type="'both'"/>

		<div class="mt-4 mx-9">
			<div>
				<h2 class="text-center inter font-bold text-title-2">{{ $route.params.stack }}</h2>
			</div>

			<div class="w-[287px] mx-auto mb-7 mt-[18px]">
				<div class=" w-full h-[5px] wrapper-percent">
					<div class=" w3-container w3-blue w3-round-large h-full" :style="percent"></div>
				</div>

        <p class="text-[0.75rem] whitespace-nowrap mr-[7px]">{{90}}% completo </p>
			</div>


			<div class="modules-wrap flex flex-col items-center">
        <CourseModule
          v-for="module in filteredModules"
          :key="module.id"
          :title="module.title"
          class="mb-[20px]"       
        >
        </CourseModule>
			</div>
		</div>
	</div>
</template>