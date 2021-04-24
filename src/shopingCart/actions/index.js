/*
 * @Author: LiAo
 * @Date: 2020-08-15 15:17:01
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-18 00:23:35
 * @Description: file content
 */
export const addToCart = (name) => {
  return {
    type: "ADD_TO_CART",
    name,
  };
};

export const checkout = () => {
  return {
    type: "CART_CHECKOUT",
  };
};
