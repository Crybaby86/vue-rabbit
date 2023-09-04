<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
//触发获取导航列表的action
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();
onMounted(() => {
  // 方法调用
  categoryStore.getCategary();
});
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key 不再复用 -->
  <RouterView />
  <LayoutFooter />
</template>
