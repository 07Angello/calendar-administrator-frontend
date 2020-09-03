import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { customTitles } from './helpers/calendar-titles';
import { Navbar } from './components/ui/Navbar';
import { CalendarEvent } from './components/calendar/CalendarEvent';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/en-gb';

moment.locale('en-gb');

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños de la flaquis',
    start: moment().toDate(),
    end: moment().add( 2, 'hours' ).toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'Angello'
    }
}]

export const CalendarApp = () => {

    const eventSylteGetter = ( event, start, end, isSelected ) => {
        console.log( event, start, end, isSelected );
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
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ customTitles }
                eventPropGetter={ eventSylteGetter }
                components={{
                    event: CalendarEvent
                }}
            />

        </div>
    )
}
