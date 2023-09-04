<script setup>
import { getCategoryAPI } from "@/apis/category";
import { getBannerAPI } from "@/apis/home";
import { onMounted, onUpdated, ref } from "vue";
import { useRoute } from "vue-router";
const categoryData = ref({});
const route = useRoute();
const getCategory = async (id) => {
  // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
  const res = await getCategoryAPI(id);
  categoryData.value = res.result;
};

// 轮播图
const bannerList = ref([]);
const getBanner = async () => {
  const res = await getBannerAPI({ distributionSite: "2" });
  bannerList.value = res.result;
};
onUpdated(() => {
  getCategory(route.params.id);
  getBanner();
});
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  /* position: absolute;
  left: 0;
  top: 0;
  z-index: 98; */
  margin: 0 auto;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
