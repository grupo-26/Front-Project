<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <h1 class="uppercase underline">Test</h1>
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
