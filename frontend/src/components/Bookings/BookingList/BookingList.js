import React from 'react';

const bookingList = props => (

    <ul>
        {props.bookings.map(booking => {
            return (
            <li>
                 {booking.event.title} - {' '} 
            {new Date(booking.createdAt).toLocaleDateString()}
            </li>
            );
        })}
    </ul>
);


export default bookingList;
