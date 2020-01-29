import React from 'react';
import Title from "../Title"
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import { ProductConsumer } from "../../context"


const Cart = () => {
    return (
        <section>
        <ProductConsumer>
            {value => {
                const { cart } = value;
                if (cart.length > 0) {
                    return (
                        <>
                    <Title name="your" title="cart" />
                    <CartColumns />
                        </>
                    )
                } else {
                    return <EmptyCart />;
                }
            }}
        </ProductConsumer>

        
        </section>
    );
};

export default Cart;