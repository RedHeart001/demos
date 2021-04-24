/*
 * @Author: LiAo
 * @Date: 2020-08-14 17:38:04
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-18 22:35:20
 * @Description: file content
 */
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
    cart: state.cart,
  };
};

const Footer = ({ productList, cart }) => {
  let total = 0;
  cart.forEach((item) => {
    total += item.num * item.price;
  });
  console.log(productList, cart);
  return <div>{total}</div>;
};

export default connect(mapStateToProps)(Footer);
