import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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

    const [ isOpen, setIsOpen ] =  useState(true);

    const closeModal = () => {
        setIsOpen( false );
    }

    return (
        <div>
            <Modal
                isOpen={ isOpen }
                // onAfterOpen={ afteropenModal }
                onRequestClose={ closeModal }
                style={ customStyles }
                closeTimeoutMS={ 200 }
                className="modal"
                overlayClassName="modal-background"
            >
                <h1>Modal Event</h1>
                <hr/>
                <span> MODAL </span>
            </Modal>
        </div>
    )
}
