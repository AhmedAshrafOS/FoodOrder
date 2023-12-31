import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from './MealItemForm.module.css'



const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const entredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || entredAmountNumber < 1 || entredAmountNumber > 5) {
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(entredAmountNumber)
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter Amount A Valid Amount</p>}
        </form>
    );
};
export default MealItemForm;