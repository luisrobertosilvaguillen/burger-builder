import React, { Fragment } from 'react';
import classes from './Modal.module.css'

import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Fragment>
        <Backdrop closed={props.closeModal} show={props.show} />
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Fragment>
);
    
export default React.memo(modal);