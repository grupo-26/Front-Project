<template>
  <section class="section-profile">
    <UserProfile />
  </section>
</template>

<script>
import UserProfile from "@/components/Profile/UserProfile.vue";

export default {
  name: "Profile",
  components: {
    UserProfile 
  }
}
</script>

<style scoped>
  
  .section-profile {
    @apply py-5 px-8;
  }
  
</style>
