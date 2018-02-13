import React from 'react';
import DoodEvent from './DoodEvent';

const DoodEventList = (props) => (
    <div>
        {props.doodEvents.map(doodEvent => (
                <DoodEvent {...doodEvent} key={doodEvent.id} />
            )

        )}
    </div>
);

export default DoodEventList;