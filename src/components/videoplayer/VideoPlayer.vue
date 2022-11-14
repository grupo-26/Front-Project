<script>
export default {
  props: {
  },
  data() {
    return {
      ll: "https://www.youtube.com/embed/zVgKnfN9i34"
    }
  },
  methods: {
    changeVideo() {
      this.ll = "https://www.youtube.com/embed/8PDGBNXD_64"
    }
  },
}

</script>

<template>
    <p>{{this.ll}}</p>
  <div class="video-player">
    <iframe class="video-player__video"  
      :src="`${ll}`" 
      title="Framestock little story about mixed racial friends. Stock footage showreel 2017" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    </div>

    <button @click="changeVideo">
      Muda Vídeo
    </button>
</template>



<style scoped>
  .video-player {
   /* @apply w-96 h-72 max-w-full;
    */
    @apply p-3;
   


  }

  .video-player__video {
    @apply w-full h-full;
  }
  
</style>
