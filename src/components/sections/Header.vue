<script>
import Nav from "../Nav/Nav.vue";

export default {
  props: ['type', 'logo'],
  components: {
    Nav
  }
}

</script>

<template>
  <div class="pt-9 px-9 lg:pt-20 ">
    <div v-if="type == 'both'" class="flex justify-between">
      <div @click="$router.go(-1)">
        voltar
      </div>

      <div class="">
        <Nav></Nav>
      </div>
    </div>

    <div v-else-if="type == 'menu'" class="flex justify-end">
      <div class="">
        <Nav></Nav>
      </div>
    </div>

    <div v-else-if="type == 'left'" class="flex justify-start">
      <div  @click="$router.go(-1)">
        voltar
      </div>
    </div>


    <div v-if="logo == 'true'" class="flex justify-center -mt-[15px]">
      <img class="w-11 h-11 lg:w-[98px]  lg:h-[92px] lg:mb-20 " src="../../assets/images/logo.png">
    </div>
  </div>
</template>