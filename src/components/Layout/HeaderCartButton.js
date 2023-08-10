
import { useContext, useEffect, useState } from 'react';

import classes from './HeadeCartButton.module.css'
import CartIcon from "../Cart/CartIcon";

import CartContext from '../store/cart-context';


const HeaderCartButton = props => {

    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);



    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;
    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true)

        const time = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300)

        return () => {
            clearTimeout(time);
        }
    }, [items]);

    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>

    );
};
export default HeaderCartButton;