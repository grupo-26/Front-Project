<script>
export default {
  props: ['link'],
  data() {
    return {
      
    }
  },
  created(){
    
  },
  methods: {
  },
}

</script>

<template>
  <div class="video-player">
    <iframe class="video-player__video"  
      :src="`${link}`" 
      title="Framestock little story about mixed racial friends. Stock footage showreel 2017" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    </div>
</template>



<style scoped>
  .video-player {
   /* @apply w-96 h-72 max-w-full;
    */
   /* @apply p-3; */
   
   height: 28vh;
  }

  @media screen and (min-width: 640px) {
    .video-player {
      height: 40vh;
    }
  }

  @media screen and (min-width: 768px) {
    .video-player {
      height: 60vh;
      display: flex;
      justify-content: center;
    }
    .video-player__video {
      @apply w-full h-full;
      
      max-width: 1080px;
    }
  }

  .video-player__video {
   @apply w-full h-full;
  }
  
</style>
