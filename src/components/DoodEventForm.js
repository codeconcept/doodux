import React from 'react';

const DoodEventForm = (props) => (
    <form>
        <input type="text" placeholder="titre" /><br />
        <input type="text" placeholder="lieu" /><br />
        <input type="text" placeholder="note" /><br />
        <button type="submit">créer</button>
    </form>
);

export default DoodEventForm;