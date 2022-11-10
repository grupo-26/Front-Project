<script>

</script>

<template>
    <div class="flex justify-between pt-9">
        <div v-if="this.$route.path == '/trilhas'">
            <router-link to="/">Voltar</router-link>
        </div>

        <img src="../../assets/images/logo.png">

        <div v-if="this.$route.path == '/trilhas'">
            <router-link to="/about">Avançar</router-link>
        </div>
    </div>
</template>