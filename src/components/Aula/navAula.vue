<template>
  <nav class="nav-aula"> 
    <div class="nav-aula__btn-box">
      <button class="nav-aula__btn">&lt; voltar</button>
      <button class="nav-aula__btn">avançar &gt;</button>
    </div>

    <div class="nav-aula__link-box">
      <button class="nav-aula__link">1</button> 
      <button class="nav-aula__link">2</button> 
      <button class="nav-aula__link">3</button> 
      <button class="nav-aula__link">4</button> 
      <button class="nav-aula__link">5</button> 
      <button class="nav-aula__link">6</button> 
    </div>
  </nav>
</template>

<style scoped>
  .nav-aula__btn-box {
    @apply flex flex-row justify-between;
    @apply px-5;
    @apply md:justify-end;
    @apply md:mt-6;
  }

  .nav-aula__btn {
    @apply font-sans font-medium;
  }

  .nav-aula__btn:not(:last-child) {
    @apply md:mr-2;
  }

  .nav-aula__link-box { 
    @apply bg-black;

    @apply w-screen;
    @apply px-5;
    @apply mt-2;

    @apply flex flex-row justify-start;
  }

  .nav-aula__link {
    @apply font-bold text-white;
    @apply p-2;

    font-size: 0.875rem;
  }
</style>
