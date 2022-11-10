<script>

</script>

<template>
    <div class="flex justify-between pt-9">
        <div v-if="this.$route.path == '/trilhas'">
            <router-link to="/" class="text-[12px]">Voltar</router-link>
        </div>

        <img src="../../assets/images/logo.png">

        <div v-if="this.$route.path == '/trilhas'">
            <router-link to="/" class="text-[12px]">
                <img src="../../assets/images/hamburguer.png">
            </router-link>
        </div>
    </div>
</template>