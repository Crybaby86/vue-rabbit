import httpInstance from "@/utils/http";

// 获取banner
export function getBannerAPI(parmas = {}) {
  const { distributionSite = "1" } = parmas;
  // 默认为1 商品为2
  return httpInstance({
    url: "/home/banner",
    distributionSite,
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const findHotAPI = () => {
  return httpInstance({
    url: "/home/hot",
  });
};
/**
 * @description: 获取商品列表
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
