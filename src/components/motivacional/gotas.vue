<script>
import { AnOutlinedClose } from "@kalimahapps/vue-icons/an";

export default {
  components: {
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

<template>
   <div class="text-white roboto px-[26px] pt-[26px]">
    <div @click="hide" class="flex justify-end w-full cursor-pointer"><AnOutlinedClose /></div>
    
    <div class="flex justify-center">
      <img src="../../assets/images/logo.png" class="w-[76px] h-[71px]" />
    </div>

    <div class="mt-[100px]">
      <h2 class="text-[25px] font-bold text-center">Gotas de motivação</h2>

      <div class="flex justify-center mt-[26px]">
        <img src="../../assets/images/gotas.png" class="w-[281px] h-[185px]" />
      </div>
      
    </div>

    <div class="mt-[27px]">
      <p class="text-[21px] font-bold text-right pl-[60px]">
        “As sementes de uma vida de estudos 
        transformam-se em frutos do sucesso.”
      </p>

      <p class="font-bold text-right mt-4">Beatriz Mello</p>
    </div>
   </div> 
</template>