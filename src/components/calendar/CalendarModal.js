import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';

import { uiCloseModal } from '../../actions/ui';
import { eventAddNew, eventClearActiveEvent, eventUpdated } from '../../actions/events';

const customStyles = {
    content: {
        top : '50%',
        left : '50%',
        right : 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform : 'translate(-50%, -50%)'
    }
}

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add( 1, 'hours' );
const finish = now.clone().add( 1, 'hours' );

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: finish.toDate()
}

export const CalendarModal = () => {

    const { modalOpen } = useSelector(state => state.ui);
    const { activeEvent } = useSelector(state => state.calendar);

    const dispatch = useDispatch();

    const [ startDate, setStartDate ] = useState( now.toDate() );
    const [ endDate, setEndDate ] = useState( finish.toDate() );

    const [formValues, setFormValues] = useState( initEvent );

    const { notes, title, start, end } = formValues;

    useEffect(() => {
        if ( activeEvent ) {
            setFormValues( activeEvent );
        } else {
            setFormValues( initEvent );
        }
    }, [ activeEvent, setFormValues ]);

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const closeModal = () => {
        dispatch( uiCloseModal() );
        dispatch ( eventClearActiveEvent() );
        setFormValues( initEvent );
    }

    const handleStartDate = ( event ) => {
        setStartDate( event );
        setFormValues({
            ...formValues,
            start: event
        });
    }

    const handleEndDate = ( event ) => {
        setEndDate( event );
        setFormValues({
            ...formValues,
            end: event
        })
    }

    const saveEvent = ( event ) => {
        event.preventDefault();

        const momentStart = moment( start );
        const momentFinish = moment( end );

        if ( momentStart.isSameOrAfter( momentFinish ) ) {
            return Swal.fire('Warning!', 'The END DATE should be greather than START DATE.', 'warning');
        }

        if ( activeEvent ) {
            dispatch( eventUpdated( formValues ) );
        } else {
            dispatch( eventAddNew({ 
                ...formValues,
                id: new Date().getTime(),
                user: {
                    _id: '123',
                    name: 'Angello'
                }
            }) );
        }

        closeModal();
    }

    return (
        <div>
            <Modal
                isOpen={ modalOpen }
                onRequestClose={ closeModal }
                style={ customStyles }
                closeTimeoutMS={ 200 }
                className="modal"
                overlayClassName="modal-background"
            >
                <h1>{ (activeEvent) ? 'Edit event' : 'New Event' }</h1>
                <hr/>
                <form
                    className="container"
                    onSubmit={ saveEvent }
                >
                                        <div className="form-group">
                        <label>Title and notes</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Event Title"
                            name="title"
                            autoComplete="off"
                            value={ title }
                            onChange={ handleInputChange }
                            required
                        />
                        <small id="emailHelp" className="form-text text-muted">Short title description</small>
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notes"
                            rows="3"
                            name="notes"
                            value={ notes }
                            onChange={ handleInputChange }
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Aditional information</small>
                    </div>

                    <hr />

                    <div className="form-group">
                        <label>Start date and time</label>
                        <DateTimePicker
                            onChange={ handleStartDate }
                            value={ startDate }
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>End date and time</label>
                        <DateTimePicker
                            onChange={ handleEndDate }
                            value={ endDate }
                            className="form-control"
                        />
                    </div>

                    <button type="submit" className="btn btn-outline-primary btn-block">
                        <i className="far fa-save"></i>
                        <span> Save</span>
                    </button>

                </form>
                
            </Modal>
        </div>
    )
}
