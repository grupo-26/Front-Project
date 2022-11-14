<template>
  <nav class="nav">
    <div class="closed-nav" :class="{ isClosed: isClosed }">  
      <button class="nav__open-btn" @click="openNavHandler">
        <AnOutlinedMenu />
      </button>
    </div>
    
    <div class="open-nav" :class="{ isOpen: isOpen }">
      <div class="open-nav__btn-box">
        <button class="nav__close-btn" @click="closeNavHandler">
          <AnOutlinedClose />
        </button>
      </div>

      <div class="open-nav__body">
        <img src="../../assets/images/logo.png" class="nav__logo" alt="Logo da orange juice">

        <ul class="nav__menu">
          <li class="nav__item">
            <router-link to="/trilhas">Home</router-link> 
          </li>
          <li class="nav__item">
            <router-link to="/profile">Perfil</router-link> 
          </li>
          <li class="nav__item">
            <router-link to="/rank">Ranking Geral</router-link> 
          </li>
          <li class="nav__item">
            <router-link to="/contact">Contato</router-link> 
          </li>
        </ul>

        <div class="logo-box">
          <img src="../../assets/images/orange-juice.png" id="orange-juice-logo" alt="logo da orange juice">
          <img src="../../assets/images/fcamara-logo.png" id="fcamara-logo" alt="logo da Fcamara">
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { AnOutlinedClose } from "@kalimahapps/vue-icons/an";
import { AnOutlinedMenu } from "@kalimahapps/vue-icons/an";

export default {
  name: "Nav",
  data() {
    return {
      isOpen: false,
      isClosed:true,
    }
  },
  components: {
    AnOutlinedClose,
    AnOutlinedMenu
  },
  methods: {
    openNavHandler: function() {
      this.isOpen = true;
      this.isClosed = false;
    },
    closeNavHandler: function() {
      this.isOpen = false;
      this.isClosed = true;
    }
  },
}
</script>

<style scoped>
  .nav {
    @apply relative;
  }

  .nav__logo {
    @apply w-14;
    @apply mb-5;
  }

  .nav__close-btn {
    /* @apply text-xl; */
    font-size: 1.25rem;
  }
  .nav__open-btn {
    @apply text-right;
    @apply block;
    /* @apply text-xl; */
    @apply text-black;

    font-size: 1.25rem;
  }

  .nav__menu {
    @apply flex flex-col justify-between;

    @apply mb-10;
  }

  .nav__item {
    @apply font-bold;
    @apply mb-8;

    font-size: 1.25rem;
  }

  .logo-box {
    @apply flex flex-row justify-center;
  }

  .logo-box img:not(:last-child) {
    @apply mr-8;
  }

  #fcamara-logo {
    width: 100px;
  }

  #orange-juice-logo {
    width: 50px;
  }

  .open-nav {
    display: none; 

    @apply fixed right-0 top-0; 

    @apply h-screen w-screen;

    @apply bg-black text-white;
  }

  @media screen and (min-width: 768px) {
    .open-nav {
      max-width: 45vh;
    }
  }

  .closed-nav {
    display: none;
  }

  .isOpen {
    display: block;
  }

  .isClosed {
    display: block;
    @apply flex flex-row justify-end;
    @apply py-5 px-5;
  }

  .open-nav__btn-box {
    @apply flex flex-row justify-end;
    @apply py-5 px-5;
  }

  .open-nav__body {
    @apply py-16 px-10;
  }
  

  
</style>
