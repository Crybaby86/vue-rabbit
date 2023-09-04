// 封装分类数据业务代码
import { getCategoryAPI } from "@/apis/category";
import { onMounted, onUpdated, ref, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id) => {
    // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };

  onMounted(() => {
    getCategory(route.params.id);
  });
  // 目标路由参数变化时，接口重新发送
  onBeforeRouteUpdate((to) => {
    // to 目标路由对象
    getCategory(to.params.id);
  });
  return {
    categoryData,
  };
}
