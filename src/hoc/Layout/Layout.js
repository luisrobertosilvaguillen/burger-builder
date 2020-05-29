import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisble] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisble(false);
    }
    const sideDrawerToggleClicked = () => {
        setSideDrawerIsVisble(!sideDrawerIsVisible);
    }
    return <Fragment>
        <div>
            <Toolbar 
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleClicked}/>

            <SideDrawer 
                isAuth={props.isAuthenticated}
                open={props.sideDrawerIsVisible}
                closed={sideDrawerClosedHandler}/>
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);