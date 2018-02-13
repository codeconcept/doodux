import React from 'react';

const DoodEvent = (props) => (
    <div>
        <div>
            <div>{props.title}</div>
            <div>lieu : {props.place}</div>
        </div>
        <hr/>
    </div>
);

export default DoodEvent;