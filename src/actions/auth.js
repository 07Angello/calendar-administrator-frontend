import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from '../types/types';

import { toast } from 'react-toastify';
import { eventLogout } from "./events";

export const startLogin = ( email, password ) => {
    return async( dispatch ) => {
        const response = await fetchWithoutToken( 'auth', { email, password }, 'POST' );
        const { Data, Message, Token } = await response.json();

        if ( Message && Message.length > 0 ) {
            toast.warn( Message );
        } else {
            localStorage.setItem('token', Token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: Data._id,
                name: Data.name,
                email: Data.email
            }) );

            toast.success( `Welcome ${ Data.name }!` );
        }
    }
}

export const registerUser = ( name, email, password ) => {
    return async( dispatch ) => {
        const response = await fetchWithoutToken( 'auth/register', { name, email, password }, 'POST' );
        const { Data, Message, Token } = await response.json();

        if ( Message && Message.length > 0 ) {
            toast.warn( Message );
        } else {
            localStorage.setItem('token', Token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: Data._id,
                name: Data.name,
                email: Data.email
            }) );

            toast.success( `Hello ${ Data.name } enjoy Calendar App!` );
        }
    }
}

export const startChecking = () => {
    return async( dispatch ) => {
        const response = await fetchWithToken( 'auth/renew-token');
        const { Data, Token } = await response.json();

        if ( Token && Token.length > 0 ) {
            localStorage.setItem('token', Token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: Data._id,
                name: Data.name
            }) );
        } else {
            dispatch( checkingFinish() );
        }
    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

const checkingFinish = () => ({
    type: types.authCheckingFinisih
});

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( eventLogout() );
        dispatch( logOut() );
    }
}

const logOut = () => ({
    type: types.authLogout
});
