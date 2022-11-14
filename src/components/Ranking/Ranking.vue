<template>
  <div class="ranking">
    <div class="logo-box">
      <img src="../../assets/images/logo.png" alt="logo da orange juice"> 
    </div> 
    
    <h2 class="ranking__title">Ranking Geral</h2>
    <h3 class="ranking__subtitle">Queremos te ver alcançando seus objetivos!</h3> 

    <Podium />
  </div>
</template>

<script>
import Podium from "./Podium.vue";

export default {
  name: "Ranking",
  components: {
    Podium,
  }
}
</script>

<style scoped>
  
</style>
