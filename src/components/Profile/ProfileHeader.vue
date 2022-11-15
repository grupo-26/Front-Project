<template>
  <div class="profile-header">
    <img
      src="../../assets/images/logo.png"
      alt="Profile image"
      class="profile-header__img"
    />

    <div class="profile-header__info">
      <h2 class="profile-header__name">{{namePlaceholder}} {{lastNamePlaceholder}}</h2>
      <h3 class="profile-header__mail">{{mailPlaceholder}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHeader",
  data() {
    return {
      namePlaceholder: "Filipe",
      lastNamePlaceholder: "Davi",
      mailPlaceholder: "davi@gmail.com"
    }
  },
  props: {
    user: {
      firstName: String,
      email: String,
    },
  }
}
</script>

<style scoped>
  
  .profile-header {
    @apply flex flex-row items-center;
    @apply mb-8;
  }

  .profile-header__img {
    width: 76px;
    border-radius: 50%;
    @apply mr-2;
  }

  .profile-header__info {
    @apply font-sans text-sm;  
    @apply text-list-module-gray;
  }

  .profile-header__name {
    @apply font-bold text-xl;
  }

</style>
