import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { removeCartItem, decreaseItemQuantity, addCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, removeItem, decreaseQuantity, addItemToCart}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={item.imageUrl} alt="item"/>
        </div>
        <span className="name">{item.name}</span>
        <span className="quantity">
            <span className="arrow" onClick={() => decreaseQuantity(item)}>&#x2C2;</span>
            {item.quantity}
            <span className="arrow" onClick={() => addItemToCart(item)}>&#x2C3;</span>
        </span>
        
        <span className="price">{item.price}</span>
        
        <div onClick={() => removeItem(item)}
            className="remove-button">&#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (item) => dispatch(addCartItem(item)),
    removeItem: (item) => dispatch(removeCartItem(item)),
    decreaseQuantity: (item) => dispatch(decreaseItemQuantity(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);