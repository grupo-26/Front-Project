<script setup>


</script>

<template>
  <nav v-if="this.$route.path == '/'">
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> | <router-link to="/trilhas">Trilhas</router-link> 
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style scoped>

</style>
