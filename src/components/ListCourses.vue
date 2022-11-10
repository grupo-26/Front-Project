<script>
export default {
  props: ['id', 'title', 'percentage'],
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
              <p class="title-2 text-white font-bold"> {{title}} </p>
            </div>
          </div>

          
          <div>
            <p> Porcentagem: {{percentage}} % concluido </p>
          </div>
        </div>
    </div>
</template>
