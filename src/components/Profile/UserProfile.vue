<template>
  <section  class="section-profile px-[26px] pt-[26px]">
    <div @click="hide" class="flex justify-end w-full cursor-pointer"><AnOutlinedClose /></div>
    <ProfileHeader :firstName="this.pname" />  
    <ProfileProgress />
    <AchievementsBox />
  </section>
</template>

<script>
import ProfileHeader from "./ProfileHeader.vue";
import ProfileProgress from "./ProfileProgressoTrilha.vue";
import AchievementsBox from "./AchievementsBox.vue";
import { AnOutlinedClose } from "@kalimahapps/vue-icons/an";

export default {
  name: "UserProfile",
  components: {
    ProfileHeader,
    ProfileProgress,
    AchievementsBox,
    AnOutlinedClose,
  },
  props: ['pname','email', 'ptsgeral', 'pts1', 'pts2'],
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    hide() {
      console.log('X clicado');
      this.$emit('hide', false);
    }
  },
}
</script>
