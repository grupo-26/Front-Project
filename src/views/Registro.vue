<template>  
  <section class="section-registro">
    <RegistrationForm />
  </section>
</template>

<script>
import RegistrationForm from '../components/registrationForm.vue';

export default {
  name: "Registro",
  components: {
    RegistrationForm
  }
}
</script>

<style>
.section-registro {
  @apply bg-white;
}

@media (min-width: 768px) {
  .section-registro {
    background-image: url("../assets/images/3d-abstract-soundwaves-background-with-flowing-lines.jpg");
    @apply bg-center bg-cover;
    @apply md:bg-black;
  }
}
</style>
