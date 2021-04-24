/*
 * @Author: LiAo
 * @Date: 2020-08-14 17:51:56
 * @LastEditors: 李敖
 * @LastEditTime: 2020-08-18 09:16:54
 * @Description: file content
 */
import React from "react";
const ProductList = ({ productList, addToCart }) => {
  return (
    <div>
      <h3>Products is HERE!</h3>
      <ul>
        {productList.map((product) => {
          return (
            <li key={product.id}>
              <p>
                <span>{product.name}</span>
                <span> X {product.num}</span>
                <span> ———— ${product.price}</span>
              </p>
              <button
                disabled={product.isSolidout}
                onClick={() => {
                  addToCart(product.name);
                }}
              >
                {product.isSolidout ? "SolidOut" : "push to cart"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProductList;
