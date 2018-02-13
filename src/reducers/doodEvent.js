const initialState = {
    doodEvents: [{
            id: 1,
            title: 'partie de soccer',
            place: 'UrbanSoccer - Centre commercial du Cap Malo, Avenue du Phare du Grand Lejeon, 35520 Melesse',
            note: 'amener ses affaires de sport',
            participants: ['Steph', 'Alex', 'Pierre', 'Loïg', 'Alpha']
        },
        {
            id: 2,
            title: 'The Big Lebowski',
            place: 'Arvor cinéma - 29 Rue d\'Antrain, 35700 Rennes',
            note: '',
            participants: ['Jeff', 'Paul', 'Sam']
        },
        {
            id: 3,
            title: 'Black Panther',
            place: 'Gaumont Rennes - 12 Rue Yvonne Jean-Haffen, 35000 Rennes',
            note: '',
            participants: ['Jeff', 'Mus', 'Téa', 'Hervé']
        },
        {
            id: 4,
            title: 'Billard',
            place: 'Bar Tiffanys, 19 Rue Paul Bert, 35000 Rennes',
            note: 'celui qui troue le tapis a intérêt à courir vite',
            participants: ['Erwan']
        }
    ]
};

const doodEventReducer = (state = initialState, action = { type: '', payload: {}}) => {
    switch(action.type) {
        case 'DOOD_EVENT_CREATE':
        // payload is the doodEvent to create        
        return {...state, doodEvents: [...state.doodEvents, action.payload]};
        case 'DOOD_EVENT_DELETE':
            // payload is the id of the doodEvent to delete
            const doodEventsAfter = state.doodEvents.filter(evt => evt.id !== action.payload);
            return {...state, doodEvents: doodEventsAfter};
        default:
            return state;
    }
};

export default doodEventReducer;