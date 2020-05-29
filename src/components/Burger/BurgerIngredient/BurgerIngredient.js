import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
    let ingredient = null;
    switch(props.type) {
        case 'bread-bottom':
            ingredient = <div data-testid="bread-bottom" className={classes.BreadBottom}></div>;
            break;
        case 'bread-top':
            ingredient = (
                <div data-testid="bread-top" className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case 'meat':
            ingredient = <div data-testid="meat" className={classes.Meat}></div>;
            break;   
        case 'cheese':
            ingredient = <div data-testid="cheese" className={classes.Cheese}></div>;
            break;         
        case 'bacon':
            ingredient = <div data-testid="bacon" className={classes.Bacon}></div>;
            break;    
        case 'salad':
            ingredient = <div data-testid="salad" className={classes.Salad}></div>;
            break;    
        default:
            ingredient = null;
            break;                                                         
    }
    
    return ingredient;
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient;