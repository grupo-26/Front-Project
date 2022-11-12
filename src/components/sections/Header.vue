<script>
    export default {
        props: []
    }

</script>

<template>
    <div class="flex justify-between lg:justify-center pt-9 px-9 lg:pt-20 ">
        <div>
            voltar
        </div>
        
        <div>
            <img class="w-11 h-11 lg:w-[98px]  lg:h-[92px] lg:mb-20 " src="../../assets/images/logo.png">
        </div>

        <div class="">
            <router-link to="/" class="text-[12px]">
                <img class="lg:hidden" src="../../assets/images/hamburguer.png">
            </router-link>
        </div>
    </div>
</template>