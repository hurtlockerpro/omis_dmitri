import React from 'react'

function Basket(props) {
    const { cartItems } = props

    return (
        <aside>
            <h3>Cart Items</h3>
            {
                cartItems.map((cartItem) => (
                    <div>
                        <span>{cartItem.productName}</span> : <span>{cartItem.price + ' ' + cartItem.currency}</span>
                    </div>
                ))
            }
        </aside>
    )
}

export default Basket
