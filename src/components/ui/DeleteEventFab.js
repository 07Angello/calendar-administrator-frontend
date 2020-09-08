import React from 'react';
import { useDispatch } from 'react-redux';
import { eventStartDelete } from '../../actions/events';
import Swal from 'sweetalert2';


export const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const deleteEvent = () => {
        Swal.fire({
            title: 'Delete Event?',
            text: 'Are you sure you want to delete this event?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                dispatch( eventStartDelete() );
                Swal.fire(
                    'Deleted!',
                    'The event has been deleted!',
                    'success'
                )
            }
        });
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ deleteEvent }
        >
            <i className="fas fa-trash"></i>
            <span> Delete event</span>
        </button>
    );
}