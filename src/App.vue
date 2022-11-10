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

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.inter {
  font-family: 'Inter', sans-serif;

}

.roboto {
  font-family: 'Roboto', sans-serif;
}

</style>
