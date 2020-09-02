import React from 'react';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={ LoginScreen } />
                <Route exact path="/register" component={ RegisterScreen } />
                <Route exact path="/" component={ CalendarScreen } />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}