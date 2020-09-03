import React, { useState } from 'react';
import moment from 'moment'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';

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

    const [ startDate, setStartDate ] = useState( now.toDate() );
    const [ endDate, setEndDate ] = useState( end.toDate() );

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: now.toDate(),
        end: end.toDate()
    });

    const { notes, title } = formValues

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const closeModal = () => {
        
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

        console.log( formValues ); 
    }

    return (
        <div>
            <Modal
                isOpen={ true }
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
                    className="form-group"
                    onSubmit={ saveEvent }
                >
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
                            minDate={ startDate }
                            className="form-control"
                        />
                    </div>

                    <hr />

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
