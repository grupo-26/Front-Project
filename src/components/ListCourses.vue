<script>
export default {
  name: 'listCourses',
  props: ['id', 'title', 'percentage'],
  computed: {
    percent() {
      return 'width: ' + this.percentage + '%';
    },
    imageNumber() {
      return this.id;
    } 
  },
}
</script>

<template>
    <div @click="$emit('tocourse')" class="w-[287px]">
        <div :class="'bg-[#EDEDED] h-[195px] course__bg course__bg--' + imageNumber"></div>
        <div class="course__content">
          <div class="course__content-bg bg-[#8C0DAD] pl-4 mb-[23px]">
            <div class="px-[24px] pt-[15px] pb-[15px] bg-black">
              <p class="title-2 text-white font-bold roboto"> {{title}} </p>
            </div>
          </div>
          
          <div class="flex items-center">
            <p class="text-[0.75rem] whitespace-nowrap mr-[7px]">{{percentage}}% completo </p>
            
            <div class="w-full h-[5px] wrapper-percent bg-gray-300">
              <div class="bg-[#8c0dad] h-full" :style="percent"></div>
            </div>
          </div>
        </div>
    </div>
</template>

<style>

.wrapper-percent {
  background-color: #D9D9D9;
}

.course__bg {
  background-image: url('../assets/images/curso-06.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.course__bg--1 {
  background-image: url('../assets/images/curso-01.png');
}

.course__bg--2 {
  background-image: url('../assets/images/curso-02.jpg');
}

.course__bg--3 {
  background-image: url('../assets/images/curso-03.jpg');
}

.course__bg--4 {
  background-image: url('../assets/images/curso-04.jpg');
}

.course__bg--5 {
  background-image: url('../assets/images/curso-05.jpg');
}
</style>
