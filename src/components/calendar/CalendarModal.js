import React from 'react';
import Modal from 'react-modal';

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

export const CalendarModal = () => {

    const closeModal = () => {
        
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
                        <input className="form-control" placeholder="Start Date" />
                    </div>

                    <div className="form-group">
                        <label>End date and time</label>
                        <input className="form-control" placeholder="End Date" />
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
