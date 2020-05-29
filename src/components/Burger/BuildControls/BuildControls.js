import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';



const buildControls = (props) => {
    let totalPrice = props.totalPrice.toFixed(2);
    totalPrice = totalPrice < 0 ? 0 : totalPrice;
    return (
        <div className={classes.BuildControls}>
            <p>Total Price: <strong data-testid="total-price">{ totalPrice }</strong></p>
            {props.controls.map((control) => (
            <BuildControl 
                key={control.type} 
                label={control.name}  
                disableRemoveButton={control.quantity === 0}  
                addIngredient={() => props.addIngredient(control.type)}
                removeIngredient={() => props.removeIngredient(control.type)}
            />
            ))}

        <button
            className={classes.OrderButton}
            data-testid="order-button"
            disabled={totalPrice <= 0}
            onClick={props.purchaseSummaryHandler}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>        
        </div>
    )
}

export default buildControls;