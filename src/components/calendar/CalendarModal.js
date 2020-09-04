import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';

import { uiCloseModal } from '../../actions/ui';

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
const end = now.clone().add( 1, 'hours' );




export const CalendarModal = () => {

    const { modalOpen } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const [ isTitleValid, setIsTitleValid] = useState( true );
    const [ startDate, setStartDate ] = useState( now.toDate() );
    const [ endDate, setEndDate ] = useState( end.toDate() );

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: now.toDate(),
        finish: end.toDate()
    });

    const { notes, title, start, finish } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const closeModal = () => {
        dispatch( uiCloseModal() );
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
        const momentFinish = moment( finish );

        if ( momentStart.isSameOrAfter( momentFinish ) ) {
            return Swal.fire('Warning!', 'The END DATE should be greather than START DATE.', 'warning');
        }

        if ( title.trim().length < 2 ) {
            setIsTitleValid( false );
            return;
        }

        setIsTitleValid( true );
        closeModal();
    }

    return (
        <div>
            <Modal
                isOpen={ modalOpen }
                // onAfterOpen={ afteropenModal }
                onRequestClose={ closeModal }
                style={ customStyles }
                closeTimeoutMS={ 200 }
                className="modal"
                overlayClassName="modal-background"
            >
                <h1>New Event</h1>
                <hr/>
                <form
                    className="container"
                    onSubmit={ saveEvent }
                >

                    <div className="form-row">
                        <div className="col">
                            <label>Start date and time</label>
                            <DateTimePicker
                                onChange={ handleStartDate }
                                value={ startDate }
                                className="form-control"
                                required={ true }
                                autoFocus={ false }
                            />
                        </div>

                        <div className="col">
                            <label>End date and time</label>
                            <DateTimePicker
                                onChange={ handleEndDate }
                                value={ endDate }
                                className="form-control"
                                required={ true }
                                autoFocus={ false }
                            />
                        </div>
                    </div>


                    <hr />

                    <div className="form-group">
                        <label>Title and notes</label>
                        <input
                            type="text"
                            className={`form-control ${ !isTitleValid && 'is-invalid' }`}
                            placeholder="Event Title"
                            name="title"
                            autoComplete="off"
                            value={ title }
                            onChange={ handleInputChange }
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

                    <button type="submit" className="btn btn-outline-primary btn-block">
                        <i className="far fa-save"></i>
                        <span> Save</span>
                    </button>

                </form>
                
            </Modal>
        </div>
    )
}
