<template>
  <section class="section-login">
    <LoginForm />
  </section>
</template>

<script>
import LoginForm from "@/components/loginForm.vue"

export default {
  name: "Login",
  components: {
    LoginForm,
  },
}
</script>

<style>
.section-login {
  @apply bg-white;
  @apply md:bg-black;
}
@media (min-width: 768px) {
  .section-login {
    background-image: url("../assets/images/3d-abstract-soundwaves-background-with-flowing-lines.jpg");
    @apply bg-center bg-cover;
    @apply md:bg-black;
  }
}
</style>
