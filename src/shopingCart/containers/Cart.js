/*
 * @Author: LiAo
 * @Date: 2020-08-14 17:33:01
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-18 21:37:25
 * @Description: file content
 */
import React from "react";
import { connect } from "react-redux";
import CartProducts from "../components/cartProducts";
import { checkout } from "../actions";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => ({
  checkout: (isCheck) => {
    dispatch(checkout(isCheck));
  },
});

const Cart = ({ cart, checkout }) => {
  return <CartProducts cart={cart} checkout={checkout} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
