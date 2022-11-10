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
    <div>
        <div class="w-[287px] h-[195px] bg-[#EDEDED]">img</div>
        <div>
          <p> Título: {{title}} </p>
          <p> Porcentagem: {{percentage}} % concluido </p>
        </div>
    </div>
</template>