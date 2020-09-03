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

    const closeModal = () => {
        
    }

    const handleStartDate = ( event ) => {
        setStartDate( event );
    }

    const handleEndDate = ( event ) => {
        setEndDate( event );
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
                <form className="form-group">
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
