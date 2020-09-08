import React, { useEffect } from 'react';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { isChecking, uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch( startChecking() );
    }, [ dispatch ])

    if ( isChecking ) {
        return (<h5>Please wait a few seconds...</h5>);
    }

    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated={ !!uid } />
                <PublicRoute exact path="/register" component={ RegisterScreen } isAuthenticated={ !!uid } />
                <PrivateRoute exact path="/" component={ CalendarScreen } isAuthenticated={ !!uid } />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}