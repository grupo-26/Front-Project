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
      course:  null,
      percentage: 20,
      userID: null,
      cursoID: null,
      userProgress: [],
		}
	},
  computed: {
    percent() {
      return 'width: ' + this.percentage + '%';
    }, 
  },
	created() {
    this.getRoadBack();
    this.routerStack = this.$route.params.stack;
    console.log("valor: " + this.tsc);
	},
  mounted() {
    this.userID = this.$route.params.iduser;
    this.cursoID = this.$route.params.idcurso;
    this.getUserData();
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
      this.userProgress.push(res.progcurso1+10);
      this.userProgress.push(res.progcurso2+15);
      this.percentage = this.userProgress[this.cursoID-1];
    }
	}
}
</script>


<template>
	<div>
		<Header :type="'left'" :logo="'true'"></Header>

		<div class="mt-4 mx-9">
			<div>
				<h2 class="text-center inter font-bold text-title-2">{{ $route.params.title }}</h2>

			</div>

			<div class="w-[287px] mx-auto mb-7 mt-[18px]">
				<div class=" w-full h-[5px] wrapper-percent bg-gray-300">
					<div class="bg-[#8c0dad] h-full" :style="percent"></div>
				</div>

        <p class="text-[0.75rem] whitespace-nowrap mr-[7px]">{{this.percentage}}% completo </p>
			</div>


			<div class="courses-wrap ">
        <CourseModule
          v-for="module in filteredModules"
          :key="module.id"
          :title="module.title"
          :modsigla="module.modsigla"
          class="mb-[20px]"       
        >
        </CourseModule>
			</div>
		</div>


	</div>
</template>

<style scoped>
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