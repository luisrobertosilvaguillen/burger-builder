import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => (
     <div data-testid="build-control" className={classes.BuildControl}>
         <div data-testid="ing-label" className={classes.Label}>{props.label}</div>
         <button data-testid="button-less" disabled={props.disableRemoveButton} className={classes.Less} onClick={props.removeIngredient}>Less</button>
         <button data-testid="button-more" className={classes.More} onClick={props.addIngredient}>More</button>
     </div>
);

export default buildControl;