<template>
  <div class="progress-card">
    <h2 class="progress-card__title">{{titlePlaceholder}}</h2>
    <div class="progress-card__body">
      <p class="progress-card__porcentage">{{percentagePlaceholder}} Completo</p> 
      <div class="progress-card__bar">
        <div 
          class="progress-card__barfill"
          :style="{'width': percentagePlaceholder }"
          > 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileProgressTrilha",
  data() {
    return {
      titlePlaceholder: "UX/UI Designer",
      percentagePlaceholder: "70%"
    }
  },
  props: {
    title: String, 
    percentage: Number,
  },
  methods: {
    turnPercentageIntoString: function() {
      // Código para quando vier o props:
      // return this.percentage = `${percentage}%`;
    }
  },
}
</script>

<style>

  .progress-card {
    @apply mb-8;
  }

  .progress-card__title {
    @apply text-xl font-bold;
    @apply mb-2;
  }

  .progress-card__body {
    @apply flex flex-row justify-between items-baseline;
  }

  .progress-card__bar {
    @apply h-2 w-2/3;
    @apply bg-gray-200;
  }

  .progress-card__barfill {
    @apply h-full;
    @apply bg-emerald-400;
  }

</style>
