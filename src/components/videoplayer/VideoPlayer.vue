<script>
export default {
  props: ['link'],
  data() {
    return {
      
    }
  },
  created(){
    //this.link = "https://www.youtube.com/embed/8PDGBNXD_64";
  },
  updated() {
   console.log('link video: ' + this.link);
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

  .video-player__video {
   @apply w-full h-full;
  }
  
</style>
