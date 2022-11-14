<script>
import axios from "axios"
import router from '../router';

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      usersGeted: {},
      wrongUser: null,
    }
  },
  created() {
    this.getUsers();
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

    match(res) {
      let sizeArr = Object.keys(res).length;

      for(let i = 0; i < sizeArr; i++) {
        if(res[i].email == this.email && res[i].password == this.password) {
          console.log('match');
          this.toTrilha(res[i].id);
          break;
        } else {
          this.wrongUser = true;
        }
      }
    },

    loginHand(evt) {
      evt.preventDefault();
      this.match(this.usersGeted);
    },

    toTrilha(id) {
      this.$router.push({name: 'trilhas', params: {id: id} });
    },

    async getUsers() {
      try {
        let response = await axios.get('http://localhost:8080/user/');
        this.usersGeted = response.data;
        console.log(response.data);
        //this.match(this.usersGeted);
        return response.data;
      } catch(e) {
        console.log(e);
      }
		},
  },
}
</script>

<template>
  <div class="login">
    <form class="login__form" @submit="loginHand">
      <div class="logo-box">
        <img src="../assets/images/logo.png" alt="" />
      </div>

      <input
        class="text-sm login__input"
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

      <div class="hidden roboto text-list-content text-red-600 mt-2" :class="{'wrong-alert': wrongUser}">
        <p class="">Email ou senha incorretos.</p>
      </div>
      
      <a href="#" class="text-xs login__link">Esqueceu sua senha?</a>

      <button class="btn btn--black">Entrar</button>

      <a href="#" class="text-xs register-link">&lt; Quero me cadastrar &gt;</a>
    </form>
  </div>
</template>

<style>
.wrong-alert {
   display: block !important;
}

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

  @apply font-sans text-black;
}

.login__input::placeholder {
  @apply font-bold font-sans text-black;
}

.login__input:not(:last-of-type) {
  @apply mb-5;
}

.login__link {
  @apply font-sans text-right;
  @apply mb-5 mt-2;
}

.register-link {
  @apply font-sans font-bold text-center;
}


</style>

