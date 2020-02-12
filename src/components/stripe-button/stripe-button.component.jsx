import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = 100 * price;
    const publishableKey = "pk_test_S32Ra9Z4M0tILXidBIoNviYj00Y20gyK1v"
    const onToken = (token) => {
        console.log(token);
        alert('Payment successfull!')
    }
    return (
        <StripeCheckout 
        label="Pay Now"
        name="React Shop SRL"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;