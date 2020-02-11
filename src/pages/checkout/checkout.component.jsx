import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import { addCartItem } from '../../redux/cart/cart.actions';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((item) => 
                <CheckoutItem key={item.id} item={item}/>)
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const mapDispatchToProps = (dispatch) => ({
    addCartItem: (item) => dispatch(addCartItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);

