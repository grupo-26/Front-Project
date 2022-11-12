<template>
  <section class="section-aula">
    <Nav /> 
    <NavAula />
    <VideoPlayer />
  </section>
</template>

<script>
import VideoPlayer from "@/components/videoplayer/VideoPlayer.vue";
import NavAula from "@/components/Aula/navAula.vue";
import Nav from "@/components/Nav/Nav.vue";

export default {
  name: "Aula",
  components: {
    VideoPlayer,
    NavAula,
    Nav
  }
}
</script>

<style scoped>

</style>
