<template>
  <div class="ranking px-[26px] pt-[26px]">
    <div @click="hide" class="flex justify-end w-full cursor-pointer"><AnOutlinedClose /></div>
    <div class="logo-box">
      <img src="../../assets/images/logo.png" alt="logo da orange juice"> 
    </div> 
    
    <div class="mb-9">
      <h2 class="ranking__title inter text-title-2 font-bold text-center">Ranking Geral</h2>
      <h3 class="ranking__subtitle inter text-list-content font-bold text-center">Queremos te ver alcançando seus objetivos!</h3> 
    </div>

    <div>
      <ul>
        <li class="flex justify-between items-center mb-[18px] roboto font-bold text-list-module-gray">
          <div class="flex items-center">
            <div class="bg-[#8c0dad] w-[33px] h-[33px] rounded-full text-white 
              flex justify-center items-center mr-[17px]">
              <p>1</p>
            </div>
            <div class="text-[15px]">Maria Silva</div>
          </div>

          <p class="text-[25px]">2500</p>
        </li>

        <li class="flex justify-between items-center mb-[18px] roboto font-bold text-list-module-gray">
          <div class="flex items-center">
            <div class="bg-[#8c0dad] w-[33px] h-[33px] rounded-full text-white 
            flex justify-center items-center mr-[17px]">
              <p>2</p>
            </div>
            <div class="text-[15px]">João Santos</div>
          </div>

          <p class="text-[25px]">1750</p>
        </li>

        <li class="flex justify-between items-center mb-[18px] roboto font-bold text-list-module-gray">
          <div class="flex items-center">
            <div class="bg-[#8c0dad] w-[33px] h-[33px] rounded-full text-white 
            flex justify-center items-center mr-[17px]">
              <p>3</p>
            </div>
            <div class="text-[15px]">Amarildo leite</div>
          </div>

          <p class="text-[25px]">1000</p>
        </li>
      </ul>
    </div>
    
    <div class="mt-[44px]">
      <div class="w-full bg-black mb-[29px]">
        <p class="text-center int font-bold text-white py-[9px]">Estão quase chegando no pódio</p>
      </div>

      <ul class="text-[10px] text-list-module-gray roboto font-bold">
        <li class="flex justify-between border-gray border-b-[1px]">
          <div class="flex pl-[17px]">
            <p class="mr-4">4</p>
            <p>Amanda souza</p>
          </div>
          <p class="pr-[17px]">900</p>
        </li>

        <li class="flex justify-between border-gray border-b-[1px]">
          <div class="flex pl-[17px]">
            <p class="mr-4">5</p>
            <p>Meire santos</p>
          </div>
          <p class="pr-[17px]">850</p>
        </li>

        <li class="flex justify-between border-gray border-b-[1px]">
          <div class="flex pl-[17px]">
            <p class="mr-4">6</p>
            <p>Thiago silva</p>
          </div>
          <p class="pr-[17px]">840</p>
        </li>

        <li class="flex justify-between border-gray border-b-[1px]">
          <div class="flex pl-[17px]">
            <p class="mr-4">4</p>
            <p>Davi Cardoso</p>
          </div>
          <p class="pr-[17px]">830</p>
        </li>

        <li class="flex justify-between border-gray border-b-[1px]">
          <div class="flex pl-[17px]">
            <p class="mr-4">4</p>
            <p>Ruan santos</p>
          </div>
          <p class="pr-[17px]">700</p>
        </li>

        <li class="flex justify-between border-gray border-b-[1px]">
          <div class="flex pl-[17px]">
            <p class="mr-4">4</p>
            <p>Bruna souza</p>
          </div>
          <p class="pr-[17px]">650</p>
        </li>

        <li class="flex justify-between border-gray border-b-[1px]">
          <div class="flex pl-[17px]">
            <p class="mr-4">4</p>
            <p>Natasha vitoria</p>
          </div>
          <p class="pr-[17px]">600</p>
        </li>


      </ul>
    </div>
  </div>
</template>

<script>
import Podium from "./Podium.vue";
import { AnOutlinedClose } from "@kalimahapps/vue-icons/an";

export default {
  name: "Ranking",
  components: {
    Podium,
    AnOutlinedClose,
  },
  methods: {
    hide() {
      console.log('X clicado');
      this.$emit('hide', false);
    }
  },
}
</script>

<style scoped>
  
</style>
