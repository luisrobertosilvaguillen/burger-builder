import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = props.ingredients.map(
        (ingredient) => {
            return <li key={ingredient.type}>{ingredient.name} : {ingredient.quantity}</li>
        }
    );
    return <Fragment>
        <h3> Your Order </h3>
        <p> A delicious order with the following ingredients: </p>
        <ul>
            { ingredientSummary }
        </ul>
        <p> Order Price: <strong data-testid="total-price">{props.totalPrice.toFixed(2)}</strong> </p>
        <p> Continue to checkout? </p>
        <Button
            btnType="Danger"
            clicked={props.cancelPurchaseHandler}>CANCEL</Button>
        <Button
            btnType="Success"
            clicked={props.purchaseContinueHandler}>CONTINUE</Button>        
    </Fragment>
};
    
export default orderSummary;

