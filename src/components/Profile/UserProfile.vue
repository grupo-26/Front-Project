<template>
  <section class="section-profile">
    <ProfileHeader />  
    <ProfileProgress />
    <AchievementsBox />
  </section>
</template>

<script>
import ProfileHeader from "./ProfileHeader.vue";
import ProfileProgress from "./ProfileProgressoTrilha.vue";
import AchievementsBox from "./AchievementsBox.vue";

export default {
  name: "UserProfile",
  components: {
    ProfileHeader,
    ProfileProgress,
    AchievementsBox
  }
}
</script>

<style lang="css">

</style>
