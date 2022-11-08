<template>
<section class="section-login">


  <div class="login">  
    <form className="login__form" action="" method="get"> 
      <h1 class="heading-primary">FCamara</h1>
      <h2 class="heading-secondary">Login</h2>
        <label class="login__label">Username</label>
        <input class="login__input" type="text" required />
        <label class="login__label">Password</label>
        <input class="login__input" type="password" required /> 
        <button class="btn btn--orange">Login</button>
    </form>
  </div>
</section>




</template>

<style>

.section-login { 
  background-image: linear-gradient(90deg, 
  rgba(255,255,255,0.5) 0%, 
  rgba(249,115,22,0.5) 100%),
  url("../../assets/images/bg-login.jpg");
  @apply bg-cover bg-center;
}

.login {
  @apply flex flex-row justify-center items-center;
  @apply min-h-screen;
}

.login__form {
  @apply block;

  @apply bg-white/50; 

  @apply max-w-2xl;

  /* Internal Positioning */
  @apply flex flex-col;
  @apply py-6 px-5;
  @apply text-center;

  /* Shadows */
  @apply drop-shadow-md;

  /* Borders */
  @apply rounded;
  
  font-family: 'Lato', sans-serif;
}

.login__label {
  @apply uppercase;
}

.login__input {
  @apply py-2 px-5;
  @apply bg-white/75;

  @apply rounded;
}

.login__input:not(:last-child) {
  @apply mb-5;
}

</style>
