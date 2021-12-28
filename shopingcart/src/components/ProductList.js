import React from 'react'
import Product from './Product'

function ProductList(props) {
    const { products, onAddProduct } = props

    return (
        <div>
            <h3>Products</h3>
            {
                products.map((product) => (
                    <Product key={product.id} product={product} onAddProduct={onAddProduct} />
                ))

            }
            
        </div>
    )
}

export default ProductList
