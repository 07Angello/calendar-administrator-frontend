import { types } from '../types/types';
import { fetchWithToken } from '../helpers/fetch';

import { toast } from 'react-toastify';
import { prepareEvents } from '../helpers/prepareEvents';

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


export const eventStartUpdate = ( event ) => {
    return async( dispatch ) => {

        try {
            const response = await fetchWithToken( `events/${ event._id }`, event, 'PUT' );
            const { Data, Message } = await response.json();

            console.log( Data );

            if ( Message && Message.length > 0 ) {
                toast.warn( Message );
            } else {
                dispatch( eventUpdated( event ) );
                toast.success( 'This event has been updated.' );
            }

        } catch (error) {
            console.log( error );
            toast.error( 'An error has ocurred while the event was UPDATING!' );
        }

    }
}

const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventStartDelete = () => {
    return async( dispatch, getState ) => {

        const { _id } = getState().calendar.activeEvent;

        try {
            
            const response = await fetchWithToken( `events/${ _id }`, {  }, 'DELETE' );
            const { Message } = await response.json();

            if ( Message && Message.length > 0 ) {
                toast.warn( Message );
            } else {
                dispatch( eventDeleted() );
                toast.success( 'The event has beend DELETED.' );
            }

        } catch (error) {
            console.log( error );
            toast.error( 'An error has ocurred while the event was DELETING!' );
        } 

    }
};

const eventDeleted = ( ) => ({
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
                const events = prepareEvents( Data );
                dispatch( eventsLoaded( events ) );
            }
        } catch (error) {
            console.log(error);
            toast.error('An error has ocurred while the events were LOADING!');
        }

    }
};

const eventsLoaded = ( events ) => ({
    type: types.eventLoaded,
    payload: events
});
