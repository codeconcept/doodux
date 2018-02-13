import React from 'react';

const DoodEvent = ({title, place}) => (
    <div>
        <div>
            <div>{title}</div>
            <div>lieu : {place}</div>
        </div>
        <hr/>
    </div>
);

export default DoodEvent;