<script>
export default {
    name: 'courseModule',
    props: {
        title: String,
        id: Number,
    },
}

</script>

<template>
    <div class="max-w-[287px] w-[287px]">
        <div class="course__content-bg bg-[#8C0DAD] w-full pl-4">
            <div class="px-[24px] pt-[15px] pb-[15px] bg-black">
              <p class="title-2 text-white font-bold roboto"> {{title}} </p>
            </div>
        </div>

        <div class="px-[19px] pt-2">
            <ul>
                <li class="flex justify-between roboto text-list-module-gray">
                    <div class="flex">
                        <input type="radio" id="" name="" value="" class="mr-2.5">
                        <p class="list-content font-[600]">UX Design</p>
                    </div>

                    <div class="flex">
                        <span class="list-content-type italic mr-5">vídeo</span>
                        <p class="font-[600]">01:00</p>
                    </div>
                </li>

                <li class="flex justify-between roboto text-list-module-gray">
                    <div class="flex">
                        <input type="radio" id="" name="" value="" class="mr-2.5">
                        <p class="list-content font-[600]">UX Design</p>
                    </div>

                    <div class="flex">
                        <span class="list-content-type italic mr-5">vídeo</span>
                        <p class="font-[600]">01:00</p>
                    </div>
                </li>

                <li class="flex justify-between roboto text-list-module-gray">
                    <div class="flex">
                        <input type="radio" id="" name="" value="" class="mr-2.5">
                        <p class="list-content font-[600]">UX Design</p>
                    </div>

                    <div class="flex">
                        <span class="list-content-type italic mr-5">vídeo</span>
                        <p class="font-[600]">01:00</p>
                    </div>
                </li>

                <li class="flex justify-between roboto text-list-module-gray">
                    <div class="flex">
                        <input type="radio" id="" name="" value="" class="mr-2.5">
                        <p class="list-content font-[600]">UX Design</p>
                    </div>

                    <div class="flex">
                        <span class="list-content-type italic mr-5">vídeo</span>
                        <p class="font-[600]">01:00</p>
                    </div>
                </li>


            </ul>
            </div>


    </div>
</template>