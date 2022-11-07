<template>
    <form className="login-form" action="" method="get">
      <h2 className="heading-secondary">Login</h2>
      <label className="login-form__label">Username</label>
      <input className="login-form__input" type="text" required />
      <label className="login-form__label">Password</label>
      <input className="login-form__input" type="password" required /> 
    </form>
</template>

<style>

.login-form {
  @apply block;

  @apply bg-white/50; 

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

.login-form__label {
  @apply uppercase;
}

.login-form__input {
  @apply py-2 px-5;
  @apply bg-white/75;

  @apply rounded;
}

.login-form__input:not(:last-child) {
  @apply mb-5;
}

.login-form__input:focus-visible {

}

</style>