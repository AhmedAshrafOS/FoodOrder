import React, { useContext } from 'react';

import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) =>
            (<CartItem key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            ></CartItem>))}
        </ul>
    );
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>

    );
}
export default Cart;