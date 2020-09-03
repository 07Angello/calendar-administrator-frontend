import React from 'react'

export const CalendarEvent = ({ event }) => {

    const { title, user } = event;
    return (
        <div>
            <div>
                <span>{ title }</span>
            </div>
            <div>
                <span style={{ fontWeight: '100' }}>
                    <i className="fas fa-user" style={{ marginRight: '5px' }}></i>
                    { user.name }
                </span>
            </div>
        </div>
    )
}
