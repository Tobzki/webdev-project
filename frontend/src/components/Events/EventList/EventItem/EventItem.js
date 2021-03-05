import React from 'react';

import './EventItem.css';

const eventItem = props => (
    <li key={props.eventId} className="events_list-item">
    <div>
        <h1>{props.title}</h1> 
        <h2>$25.50</h2>
        </div>
        <div>
            {props.userId === props.creatorId ? <p>You are administrator of this event</p> : 
             <button className="btn">View Details</button>}
            
        </div>
    </li>

);

export default eventItem;