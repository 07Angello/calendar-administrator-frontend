import { types } from "../types/types";

const initialState = {
    isChecking: true
}

export const authReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.authLogin:
            return {
                ...state,
                isChecking: false,
                ...action.payload
            }

        case types.authCheckingFinisih:
            return {
                ...state,
                isChecking: false
            }

        case types.authLogout:
            return {
                isChecking: false
            }
    
        default:
            return state;
    }
}