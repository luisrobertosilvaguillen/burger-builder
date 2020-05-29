import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component { 

    state = {
        showSummary: false,
    }
    componentDidMount() {
        this.props.onInitIngredients();
    }
    // ORDER OR GO TO LOGIN BUTTON
    purchaseSummaryHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({showSummary: true});
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }        
    }

    // MODAL BUTTONS
    cancelPurchaseHandler = () => {
        this.setState({showSummary: false})
    }
    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push({
            pathname: '/checkout'
        });
    }    

    render() {
        let orderSummary = null;
        let burguer = this.props.error ? <p>Ingredients can't be leaded</p> : <Spinner />;
        if (this.props.ings) {
            burguer = <Fragment>
                            <Burger ingredients={ this.props.ings }></Burger>
                            <BuildControls 
                                controls={this.props.ings} 
                                totalPrice={this.props.price}
                                addIngredient = {this.props.onIngredientAdded}
                                removeIngredient = {this.props.onIngredientRemoved}
                                isAuth={this.props.isAuthenticated}
                                purchaseSummaryHandler={this.purchaseSummaryHandler}
                            />
                        </Fragment>;

            orderSummary = <OrderSummary 
                                cancelPurchaseHandler={this.cancelPurchaseHandler} 
                                purchaseContinueHandler={this.purchaseContinueHandler} 
                                totalPrice={this.props.price}
                                ingredients={this.props.ings} />;               
      
        }

        return (
            <Fragment>
                <Modal 
                    show={ this.state.showSummary}
                    closeModal={this.cancelPurchaseHandler} >
                    {orderSummary}
                </Modal>
                {burguer}
            </Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientType) => dispatch(actions.addIngredient(ingredientType)),
        onIngredientRemoved: (ingredientType) => dispatch(actions.removeIngredient(ingredientType)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));