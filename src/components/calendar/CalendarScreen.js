import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { customTitles } from '../../helpers/calendar-titles';
import { Navbar } from '../../components/ui/Navbar';
import { AddNewFab } from '../../components/ui/AddNewFab';
import { DeleteEventFab } from '../../components/ui/DeleteEventFab';
import { CalendarEvent } from '../../components/calendar/CalendarEvent';
import { CalendarModal } from './CalendarModal';

import { uiOpenModal } from '../../actions/ui';
import { eventSetActive } from '../../actions/events';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/en-gb';

moment.locale('en-gb');
const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {

    const { events, activeEvent } = useSelector( state => state.calendar );
    const newEvents = Object.assign([], events);

    const dispatch = useDispatch();

    const [ lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'month' );

    const onDoubleClick = ( event ) => {
        dispatch( uiOpenModal() );
    }

    const onSelectEvent = ( event ) => {
        dispatch( eventSetActive( event ) );
    }

    const onSelectSlot = (  ) => {

    }

    const onViewChange = ( event ) => {
        setLastView( event );
        localStorage.setItem( 'lastView', event );
    }

    const eventSylteGetter = ( event, start, end, isSelected ) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.9,
            display: 'block'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ newEvents }
                startAccessor="start"
                endAccessor="end"
                messages={ customTitles }
                eventPropGetter={ eventSylteGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                onView={ onViewChange }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />

            {
                ( activeEvent ) && <DeleteEventFab />
            }

            <AddNewFab />
            
        </div>
    )
}