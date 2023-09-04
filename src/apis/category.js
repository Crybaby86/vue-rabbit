import httpInstance from "@/utils/http";

/**
 * @description: 二级导航
 * @param {*}
 * @return {*}
 */
export const getCategoryAPI = (id) => {
  return httpInstance({
    url: `/category?id=${id}`,
    parmas: {
      id,
    },
  });
};

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};
