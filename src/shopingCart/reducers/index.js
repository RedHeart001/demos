/*
 * @Author: LiAo
 * @Date: 2020-08-14 21:30:50
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-18 22:32:27
 * @Description: file content
 */
let productList = [
  {
    name: "Armstrong T-shirt",
    id: 1,
    price: 10,
    num: 3,
    isSolidout: false,
  },
  {
    name: "Armstrong pants",
    id: 2,
    price: 20,
    num: 4,
    isSolidout: false,
  },
  {
    name: "Armstrong hat",
    id: 3,
    price: 30,
    num: 5,
    isSolidout: false,
  },
];

let cart = [];

function addToCart(arr, product) {
  let isExist = false;
  arr.forEach((item) => {
    if (item && item.name === product.name) {
      isExist = true;
      item.num++;
    }
  });

  if (!isExist) {
    arr.push({
      name: product.name,
      id: product.id,
      num: 1,
      price: product.price,
    });
  }

  return arr;
}

const reudcer = (state = { productList, cart }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newPros = state.productList.concat(),
        newCart = state.cart.concat();
      newPros.forEach((product) => {
        if (action.name === product.name) {
          newCart = addToCart(newCart, product);
          product.num--;
          if (product.num === 0) {
            product.isSolidout = true;
          }
          return;
        }
      });
      return {
        productList: newPros,
        cart: newCart,
      };
    case "CART_CHECKOUT":
      return {
        productList: state.productList,
        cart: [],
      };
    default:
      return state;
  }
};

export default reudcer;
