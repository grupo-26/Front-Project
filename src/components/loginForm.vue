<template>
  <div class="login">
    <form class="login__form" @submit="loginHandler">
      <div class="logo-box">
        <img src="../assets/images/logo.png" alt="" />
      </div>

      <input
        class="login__input"
        id="email"
        type="email"
        v-model="email"
        autocomplete="off"
        aria-label="campo de email"
        placeholder="email"
      />

      <input
        class="login__input"
        id="password"
        type="password"
        v-model="password"
        aria-label="campo de senha"
        placeholder="senha"
      />

      <a href="#" class="login__link">Esqueceu sua senha?</a>

      <button class="btn btn--black">Entrar</button>

      <a href="#" class="register-link">&lt; Quero me cadastrar &gt;</a>
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    loginHandler: function (evt) {
      evt.preventDefault()

      axios({
        method: "post",
        url: "http://localhost:8080/user/login",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          if (error.response) {
            console.log("Data: " + error.response.data)
            console.log("Status: " + error.response.status)
            console.log("Headers: " + error.response.headers)
          }
        })
    },
  },
}
</script>

<style scoped>
.login {
  @apply flex flex-row justify-center items-center;
  @apply min-h-screen;
}

.login__form {
  @apply block;

  @apply bg-white;

  @apply w-80 h-96;

  @apply py-4 px-6;
  /* Internal Positioning */
  @apply flex flex-col;

  @apply font-sans;
}

.login__input {
  @apply py-2 px-4;
  @apply bg-white-gray;
  @apply border border-gray-900;

  @apply font-sans text-black text-sm;
}

.login__input::placeholder {
  @apply font-bold font-sans text-black text-sm;
}

.login__input:not(:last-of-type) {
  @apply mb-5;
}

.login__link {
  @apply font-sans text-xs text-right;
  @apply mb-5 mt-2;
}

.register-link {
  @apply text-xs font-sans font-bold text-center;
}
</style>
