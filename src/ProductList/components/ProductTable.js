import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filteWord, isStocked }) {
    let series = [];
    let filterProducts = [];

    console.log(products, isStocked);
    products.forEach(product => {
        if (series.indexOf(product.category) < 0) {
            series.push(product.category);
        }
    });

    series.forEach(serie => {
        const children = products.filter(product => {
            if (product.name.indexOf(filteWord) > -1) {
                if (!isStocked) {
                    return product.category === serie;
                }
                return product.category === serie && product.stocked;
            }
        })
        filterProducts.push({
            category: serie,
            children
        })
    })

    console.log(filterProducts)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterProducts.map(serie => {
                        if (serie.children.length > 0) {
                            return (
                                <div key={serie.category}>
                                    <ProductCategoryRow category={serie.category} />
                                    {
                                        serie.children.map(child => {
                                            return (
                                                <ProductRow key={child.name} product={child} />
                                            )
                                        })
                                    }
                                </div>
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </tbody>
        </table>
    )
}

export default ProductTable;