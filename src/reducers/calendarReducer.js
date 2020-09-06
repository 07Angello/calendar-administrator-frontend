import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'Cumpleaño de Angello!',
        start: moment().toDate(),
        end: moment().add( 2, 'hours' ).toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar el pastel',
        user: {
            _id: '123',
            name: 'Test User'
        }
    }],
    activeEvent: null
};

export const calendarReducer = ( state = initialState, action ) => {
    const newEvents = { ...state.events };

    console.log(newEvents);

    switch ( action.type ) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
    
        default:
            return state;
    }
}