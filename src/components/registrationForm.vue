<template>
  <div class="registration">
    <form class="form" @submit="loginHandler">
      <div class="logo-box">
        <img src="../assets/images/logo.png" alt="" />
      </div>

      <input
        class="text-sm form__input"
        id="nome"
        type="text"
        v-model="firstName"
        autocomplete="off"
        aria-label="campo de nome"
        placeholder="nome"
      />

      <input
        class="text-sm form__input"
        id="cidade"
        type="text"
        v-model="cidade"
        autocomplete="off"
        aria-label="campo de cidade"
        placeholder="cidade"
      />


      <input
        class="text-sm form__input"
        id="estado"
        type="text"
        v-model="estado"
        autocomplete="off"
        aria-label="campo de estado"
        placeholder="estado"
      />

      <input
        class="text-sm form__input"
        id="email"
        type="email"
        v-model="email"
        autocomplete="off"
        aria-label="campo de email"
        placeholder="email"
      />

      <input
        class="form__input"
        id="password"
        type="password"
        v-model="password"
        aria-label="campo de senha"
        placeholder="senha"
      />

      <button class="btn btn--black mt-5">Cadastrar</button>

      <a href="#" class="text-xs register-link">&lt; Já sou Cadastrado &gt;</a>
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

<style>
.registration {
  @apply flex flex-row justify-center items-center;
  @apply min-h-screen;
}
</style>
