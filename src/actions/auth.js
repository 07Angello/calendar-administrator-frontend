import { fetchWithoutToken } from "../helpers/fetch";
import { types } from '../types/types';

import { toast } from 'react-toastify';

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

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});
