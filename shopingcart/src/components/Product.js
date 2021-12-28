import React from 'react'

function Product(props) {
    const { product, onAddProduct } = props
    return (
        <div className='product'>
            <img src={ product.image } alt={ product.productName } />
            <h3>{ product.productName }</h3>
            Price: <span>{ product.price + ' ' + product.currency }</span>
            <button onClick={ () => onAddProduct(product) }>Add to cart</button>
        </div>
    )
}

export default Product
