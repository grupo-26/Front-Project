<template>
  <div class="video-player">
    <h2>Título do Vídeo</h2>
    <h3>Autor: YT</h3>
    <iframe class="video-player__video"  
      src="https://www.youtube.com/embed/c5nhWy7Zoxg?list=PLmUBwxvdqHq-2La24tH5J55DwBdUwZnoI" 
      title="Framestock little story about mixed racial friends. Stock footage showreel 2017" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    </div>
</template>

<script>

</script>

<style scoped>
  .video-player {
    @apply w-96 h-72 max-w-full;

    @apply p-3;
  }

  .video-player__video {
    @apply w-full h-full;
  }
  
</style>
