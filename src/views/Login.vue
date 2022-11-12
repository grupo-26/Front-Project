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
</style>
