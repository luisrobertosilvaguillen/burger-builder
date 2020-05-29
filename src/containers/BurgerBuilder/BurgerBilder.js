import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';


const BurgerBuilder = props => {
    const [showSummary, setShowSummary] = useState(false);

    const ings = useSelector(state => {
        return state.burgerBuilder.ingredients
    });
    const price = useSelector(state => {
        return state.burgerBuilder.totalPrice
    });
    const error = useSelector(state => {
        return state.burgerBuilder.error
    });
    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null
    });

    const dispatch = useDispatch();

    const onIngredientAdded= (ingredientType) => dispatch(actions.addIngredient(ingredientType));
    const onIngredientRemoved= (ingredientType) => dispatch(actions.removeIngredient(ingredientType));
    const onInitIngredients= useCallback(() => dispatch(actions.initIngredients()), [dispatch]);
    const onInitPurchase= () => dispatch(actions.purchaseInit());
    const onSetAuthRedirectPath= (path) => dispatch(actions.setAuthRedirectPath(path));

    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients]);

    // ORDER OR GO TO LOGIN BUTTON
    const purchaseSummaryHandler = () => {
        if (props.isAuthenticated) {
            setShowSummary(true);
        } else {
            onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }        
    }

    // MODAL BUTTONS
    const cancelPurchaseHandler = () => {
        setShowSummary(false);
    }

    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push({
            pathname: '/checkout'
        });
    }    

    let orderSummary = null;
    let burguer = error ? <p>Ingredients can't be leaded</p> : <Spinner />;
    if (ings) {
        burguer = <Fragment>
                        <Burger ingredients={ ings }></Burger>
                        <BuildControls 
                            controls={ings} 
                            totalPrice={price}
                            addIngredient = {onIngredientAdded}
                            removeIngredient = {onIngredientRemoved}
                            isAuth={isAuthenticated}
                            purchaseSummaryHandler={purchaseSummaryHandler}
                        />
                    </Fragment>;

        orderSummary = <OrderSummary 
                            cancelPurchaseHandler={cancelPurchaseHandler} 
                            purchaseContinueHandler={purchaseContinueHandler} 
                            totalPrice={price}
                            ingredients={ings} />;               
  
    }

    return (
        <Fragment>
            <Modal 
                show={ showSummary}
                closeModal={cancelPurchaseHandler} >
                {orderSummary}
            </Modal>
            {burguer}
        </Fragment>
    );    
}


export default withErrorHandler(BurgerBuilder, axios);