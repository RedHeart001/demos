/*
 * @Author: LiAo
 * @Date: 2020-08-14 17:32:53
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-18 23:08:06
 * @Description: file content
 */
import React from "react";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import { addToCart } from "../actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    productList: state.productList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (name) => {
    dispatch(addToCart(name));
  },
});

const Products = ({ productList, addToCart }) => {
  return <ProductList productList={productList} addToCart={addToCart} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
