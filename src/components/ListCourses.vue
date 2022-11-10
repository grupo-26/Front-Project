<script>
export default {
  props: ['id', 'title', 'percentage'],
  computed: {
    percent() {
      return 'width: ' + this.percentage + '%';
    }, 
  },
}

import axios from "axios";

axios
  .get("https://api.github.com/users/wkfilipedavi")
  .then((res) => {
          console.log(res.data)
  })
  .catch((error) => {
          console.log(error);
  });

</script>

<template>
    <div class="w-[287px]">
        <div class="bg-[#EDEDED] h-[195px]">img</div>
        <div class="course__content">
          <div class="course__content-bg bg-[#8C0DAD] pl-4 mb-[23px]">
            <div class="px-[24px] pt-[15px] pb-[15px] bg-black">
              <p class="title-2 text-white font-bold roboto"> {{title}} </p>
            </div>
          </div>
          
          <div class="flex items-center">
            <p class="text-[0.75rem] whitespace-nowrap mr-[7px]">{{percentage}}% completo </p>
            
            <div class="w-full h-[5px] wrapper-percent">
              <div class=" w3-container w3-blue w3-round-large h-full" :style="percent"></div>
            </div>
          </div>
        </div>
    </div>
</template>

<style>

.wrapper-percent {
  background-color: #D9D9D9;
}
</style>
