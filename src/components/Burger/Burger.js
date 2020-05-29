import React from 'react';
import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let ingredients = props.ingredients.map((ingredient, index) => {

        const splitedIngredients = [];
        for(let n= 0; n < ingredient.quantity; n++){
            splitedIngredients.push(<BurgerIngredient key={ingredient.type + index + n} type={ingredient.type} />);
        }
        return splitedIngredients
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(ingredients.length === 0)
        ingredients = <p>Please start adding ingredients!</p>;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
   );
};


export default burger;