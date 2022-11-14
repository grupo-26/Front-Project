<template>
  <div class="circle">
    <div class="circle__star yellow" v-if="color === 'yellow'">
    </div>

    <div class="circle__star green" v-if="color === 'green'">
    </div>

    <div class="circle__star pink" v-if="color === 'pink'">
    </div>
  </div>
</template>

<script>
export default {
  name: "Star",
  data() {
    return {
      colorPlaceholder: "yellow"
    }
  },
  props: {
    color: String
  }  
}
</script>

<style scoped>

  .circle {
    border-radius: 50%;
    @apply h-6 w-6 p-1;

    @apply mr-2;

    @apply bg-black;
  }

  .circle__star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    @apply w-full h-full;
  }

  .yellow {
    @apply bg-yellow;
  }

  .purple {
    @apply bg-purple;
  }

  .pink {
    @apply bg-pink;
  }

  .green {
    background-color: #00D6AC;
  }
  
</style>
