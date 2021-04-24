/*
 * @Author: LiAo
 * @Date: 2020-08-15 16:59:17
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-18 00:31:13
 * @Description: file content
 */
import React from "react";

const CartProducts = ({ cart, checkout }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => {
            return (
              <li key={product.id}>
                {product.name} X {product.num}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>there is nothing now!</p>
      )}
      <button
        onClick={() => {
          checkout();
        }}
      >
        check out!
      </button>
    </div>
  );
};

export default CartProducts;
