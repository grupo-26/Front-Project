<script setup>
import ListCourses from './components/ListCourses.vue'; 


</script>

<template>
  <listCourses />
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style scoped>

</style>
