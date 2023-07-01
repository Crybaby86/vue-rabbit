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
