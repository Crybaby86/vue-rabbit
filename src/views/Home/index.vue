<script setup>
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeHot from '@/views/Home/components/HomeHot.vue'
import HomeNew from '@/views/Home/components/HomeNew.vue'
import HomeProduce from '@/views/Home/components/HomeProduce.vue'

</script>

<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <div>
        <HomeNew />
        <HomeHot />
        <HomeProduce />
    </div>
</template>