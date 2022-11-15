<script>
//import Nav from "../Nav/Nav.vue";
import Profile from "../Profile/UserProfile.vue";
import Rank from "../Ranking/Ranking.vue";
import Gotas from "../motivacional/gotas.vue";
import axios from "axios";

export default {
  props: ['iduser'],
  components: {
    Profile,
    Rank,
    Gotas,
  },
  data() {
    return {
      requisicao: {},
      showProfile: false,
      showRank: false,
      showGotas: false,

    }
  },
  mounted() {
  },
  methods: {
    goHome(id) {
      console.log('função');
      this.$router.push({ name: 'trilhas', params: { id: id } })
    },

    setShowProfile() {
      this.showProfile = true;
      this.headerGetUser();
    },

    setHideProfile(value) {
      this.showProfile = value;
    },

    setShowRank() {
      this.showRank = true;
    },

    setHideRank(value) {
      this.showRank = value;
    },

    setShowGotas() {
      this.showGotas = true;
    },

    setHideGotas(value) {
      this.showGotas = value;
    },

    headerGetUser() {
      //console.log("req: " + "http://localhost:8080/user/" + this.userID);
      axios
        //.get("http://localhost:8080/user/1")
        ({
          method: 'GET',
          url: `http://localhost:8080/user/${this.iduser}`
        })
        .then((res) => {
          //this.requisicao = res.data;
          console.log('Header data');
          console.log(res.data);
          this.filterToHeader(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
}

</script>

<template>
  <Profile @hide="setHideProfile" :class="{'show-profile': showProfile}" class="hidden w-screen h-screen md:w-[360px] fixed right-0 top-0 bg-[#f5f5f5]"></Profile>
  <Rank @hide="setHideRank" class="hidden w-screen h-screen md:w-[360px] fixed right-0 top-0 bg-[#f5f5f5]" :class="{'show-rank': showRank}"></Rank>
  <Gotas @hide="setHideGotas" class="hidden w-screen h-screen md:w-[360px] fixed right-0 top-0 bg-black" :class="{'show-gotas': showGotas}"></Gotas>
      <div class="flex flex-col md:flex-row md:justify-between items-center pt-[38px] md:px-[90px] md:pt-[60px] lg:px-[121px] mb-9 md:mb-0">
        
        <div>
          <div class="">
            <img class="w-11 h-11 lg:w-[56px] lg:h-[56px]" src="../../assets/images/logo.png">
          </div>
        </div>
        
        <div class="flex justify-center  md:justify-end w-full px-9 mt-4 md:mt-0 md:px-0">
          
          <div @click="goHome(this.$route.params.iduser)" class="cursor-pointer flex flex-col items-center mr-4 lg:mr-8">
            <img class="w-[18px] h-[18px] ld:w-[23px] ld:h-[23px]" src="../../assets/images/home.png">
            <span class="roboto text-list-content">Home</span>
          </div>

          <div @click="setShowGotas" class="cursor-pointer flex flex-col items-center mr-4 lg:mr-8">
            <img class="w-[18px] h-[18px] ld:w-[23px] ld:h-[23px]" src="../../assets/images/motiva.png">
            <span class="roboto text-list-content">Gotas de Motivação</span>
          </div>

          <div  @click="setShowRank" class="cursor-pointer flex flex-col items-center mr-4 lg:mr-8">
            <img class="w-[18px] h-[18px] ld:w-[23px] ld:h-[23px]" src="../../assets/images/rank.png">
            <span class="roboto text-list-content">Ranking Geral</span>
          </div>

          <div @click="setShowProfile" class="cursor-pointer flex flex-col items-center lg:mr-8">
            <img class="w-[18px] h-[18px] ld:w-[23px] ld:h-[23px]" src="../../assets/images/profile.png">
            <span class="roboto text-list-content">Perfil</span>
          </div>
        </div>
      </div>
    
</template>

<style>
  .show-profile {
    display: block !important;;
  }

  .show-rank {
    display: block !important;;
  }

  .show-gotas {
    display: block !important;;
  }
</style>