<script setup>
import { getCategoryAPI } from "@/apis/category";
import { onMounted, onUpdated, ref } from "vue";
import { useRoute } from "vue-router";
const categoryData = ref({});
const route = useRoute();
const getCategory = async (id) => {
  // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
  const res = await getCategoryAPI(id);
  categoryData.value = res.result;
};
onUpdated(() => {
  getCategory(route.params.id);
});
</script>

<template>
  <div class="bread-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
