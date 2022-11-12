<script>
export default {
  props: ['type'],
}

</script>

<template>
  <div class="pt-9 px-9 lg:pt-20 ">
    <div v-if="type == 'both'" class="flex justify-between">
      <div>
        voltar
      </div>

      <div class="">
        <router-link to="/" class="text-[12px]">
          <img class="lg:hidden" src="../../assets/images/hamburguer.png">
        </router-link>
      </div>
    </div>

    <div v-else-if="type == 'menu'" class="flex justify-end">
      <div class="">
        <router-link to="/" class="text-[12px]">
          <img class="lg:hidden" src="../../assets/images/hamburguer.png">
        </router-link>
      </div>
    </div>

    <div v-else class="flex justify-start">
      <div>
        voltar
      </div>
    </div>


    <div class="flex justify-center -mt-[15px]">
      <img class="w-11 h-11 lg:w-[98px]  lg:h-[92px] lg:mb-20 " src="../../assets/images/logo.png">
    </div>
  </div>
</template>