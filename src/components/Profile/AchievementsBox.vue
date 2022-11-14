<template>
  <div class="achievements">
    <h2 class="achievements__title">Painel de Conquistas</h2>  
    <div class="achievements__daily">
      <div class="achievements__card"> 
        <p class="achievements__card-title"> 
          <Star color="yellow" />
        </p>
        <p class="achievements__score">50</p>
      </div>
      <hr>
      <p class="achievements__sub">metas cumpridas</p>
    </div>

    <div class="achievements__aulas">
      <div class="achievements__card"> 
        <p class="achievements__card-title"> 
          <Star color="pink" />
          Quality Assurance (QA) 
        </p>
        <p class="achievements__score">50</p>
      </div>
      <hr>
      <p class="achievements__sub">aulas completadas</p>
    </div>

    <h4 class="total-score">Pontuação: <span class="total-score__num">500</span></h4>
  </div>
</template>

<script>
import Star from "./Star.vue";

export default {
  name: "AchievementsBox",
  components: {
    Star,
  },
  props: {
    achievements: [String] 
  }
}
</script>

<style scoped>
  .achievements__title {
    @apply bg-black text-white;
    @apply text-center font-bold font-sans text-xl;
  } 

  .achievements__daily {
    @apply mb-8 pb-1;
  }

  .achievements__card {
    @apply flex flex-row items-center justify-between;
  }

  .achievements__card-title {
    @apply flex flex-row items-center;

    @apply font-sans text-sm text-black;
  }

  .achievements__score {
    @apply text-list-module-gray;

    @apply font-sans font-bold text-3xl;
  }

  .achievements__aulas {
    @apply mb-8;
  }

  .achievements__sub {
    @apply text-list-module-gray text-sm;
  }

  .hr {
    @apply mb-2;
  }

  .total-score {    
    @apply font-sans font-bold text-3xl text-right;
  }

  .total-score__num {
    @apply text-list-module-gray;
  }

</style>
