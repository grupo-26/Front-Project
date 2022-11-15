<script>
//import Nav from "../Nav/Nav.vue";

export default {
  props: ['type', 'logo'],
  components: {
  
  }
}

</script>

<template>
      <div class="flex flex-col md:flex-row md:justify-between items-center pt-[38px] md:px-[90px] md:pt-[60px] lg:px-[121px] lg:pt-[90px] mb-9 md:mb-0">
        <div>
          <div v-if="logo == 'true'" class="">
            <img class="w-11 h-11 lg:w-[56px] lg:h-[56px]" src="../../assets/images/logo.png">
          </div>
        </div>
        
        <div class="flex justify-center  md:justify-end w-full px-9 mt-4 md:mt-0 md:px-0">
          
          <div class="cursor-pointer flex flex-col items-center mr-4 lg:mr-8">
            <img class="w-[18px] h-[18px] ld:w-[23px] ld:h-[23px]" src="../../assets/images/home.png">
            <span class="roboto text-list-content">Home</span>
          </div>

          <div class="cursor-pointer flex flex-col items-center mr-4 lg:mr-8">
            <img class="w-[18px] h-[18px] ld:w-[23px] ld:h-[23px]" src="../../assets/images/motiva.png">
            <span class="roboto text-list-content">Gotas de Motivação</span>
          </div>

          <div class="cursor-pointer flex flex-col items-center mr-4 lg:mr-8">
            <img class="w-[18px] h-[18px] ld:w-[23px] ld:h-[23px]" src="../../assets/images/rank.png">
            <span class="roboto text-list-content">Ranking Geral</span>
          </div>

          <div class="cursor-pointer flex flex-col items-center lg:mr-8">
            <img class="w-[18px] h-[18px] ld:w-[23px] ld:h-[23px]" src="../../assets/images/profile.png">
            <span class="roboto text-list-content">Perfil</span>
          </div>
        </div>
      </div>
    
</template>