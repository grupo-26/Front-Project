<script>
import CourseModule from '../components/CourseModule.vue';

export default {
	components: {
		CourseModule
	},
	data() {
		return {
			modules: {},
			course: null
		}
	},
	mounted() {
		this.getRoad();
		console.log(this.modules);
	},
	methods: {
		getRoad() {
			if (this.$route.params.stack == 'ux') {
				this.modules = [
					{ id: 1, title: "fundamentos ux", stack: "ux" },
					{ id: 2, title: "fundamentos ui", stack: "ux 2" },
					{ id: 3, title: "planos de carreira", stack: "ux 2" },
					{ id: 4, title: "fundamentos ui/ux 2", stack: "ux 2" }

				];
				console.log('ux');
				console.log(this.modules);
				//this.value = 'ux';
				this.course = 'UX/UI Designer';
			}
			else if (this.$route.params.stack == 'dfs') {
				this.modules = [
					{ id: 1, title: "Algoritmos", stack: "dfs" },
					{ id: 2, title: "HTTP", stack: "dfs" },
					{ id: 3, title: "GIT", stack: "dfs" },
					{ id: 4, title: "html", stack: "dfs" }
				];
				console.log('dfs');
				console.log(this.modules);
				//this.value = 'dfs';
				this.course = 'Desenvolvimento Full Stack';
			}
		}
	}
}
</script>


<template>
	<div>
		<Header :type="'both'"/>

		<div class="mt-4 mx-9">
			<div>
				<h2 class="text-center inter font-bold text-title-2">{{ this.course }}</h2>
			</div>

			<div class="w-[287px] mx-auto mb-7 mt-[18px]">
				<div class=" w-full h-[5px] wrapper-percent">
					<div class=" w3-container w3-blue w3-round-large h-full" :style="percent"></div>
				</div>

        <p class="text-[0.75rem] whitespace-nowrap mr-[7px]">{{90}}% completo </p>
			</div>


			<div class="modules-wrap flex flex-col items-center">
				<CourseModule v-for="module in modules" :title="module.title" class="mb-[20px]">
				</CourseModule>
			</div>
		</div>
	</div>
</template>