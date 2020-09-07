import React from 'react';
import { Provider } from 'react-redux'

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CalendarApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
            <ToastContainer
                position="top-right"
                newestOnTop={ true }
                autoClose={ 3500 }
            />
        </Provider>
    )
}
