import { types } from '../types/types';
import { fetchWithToken } from '../helpers/fetch';

import { toast } from 'react-toastify';

export const eventStartAddNew = ( event ) => {
    return async ( dispatch, getState ) => {

        const { uid, name } = getState().auth;

        try {
            const response = await fetchWithToken( 'events', event, 'POST' );
            const { Message, Data } = await response.json();

            if ( Message && Message.length > 0 ) {
                toast.warn( Message );
            } else {
                event.id = Data._id;
                event.user = {
                    uid: uid,
                    name: name
                }

                dispatch( eventAddNew( event ) );
                toast.success( 'The event has been successfully saved.' );
            }
        } catch ( error ) {
            console.log( error );
            toast.error( 'An error has ocurred while the event was saving!' );
        }
    }
}

const eventAddNew = ( event ) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = ( event ) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = ( event ) => ({
    type: types.eventClearActiveEvent
});

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = ( event ) => ({
    type: types.eventDeleted
});

export const eventStartLoading = () => {
    return async( dispatch ) => {

        try {
            const response = await fetchWithToken( 'events' );
            const { Message, Data } = await response.json();

            if ( Message && Message.length > 0 ) {
                toast.warn( Message );
            } else {
                console.log( Data );
                dispatch( eventsLoaded( [] ) );
            }
        } catch (error) {
            
            // PENDING TO FINISH
            console.log(error);
            toast.error('An error has ocurred while the event was saving!');
        }

    }
};

const eventsLoaded = ( events ) => ({
    type: types.eventLoaded,
    payload: events
});
