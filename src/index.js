import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
    doodevents: [{
            id: 1,
            title: 'partie de soccer',
            place: 'UrbanSoccer - Centre commercial du Cap Malo, Avenue du Phare du Grand Lejeon, 35520 Melesse',
            participants: ['Steph', 'Alex', 'Pierre', 'Loïg', 'Alpha']
        },
        {
            id: 2,
            title: 'The Big Lebowski',
            place: 'Arvor cinéma - 29 Rue d\'Antrain, 35700 Rennes',
            participants: ['Jeff', 'Paul', 'Sam']            
        },
        {
            id: 3,
            title: 'Black Panther',
            place: 'Gaumont Rennes - 12 Rue Yvonne Jean-Haffen, 35000 Rennes',
            participants: ['Jeff', 'Mus', 'Téa', 'Hervé']                        
        },
    ]
}

ReactDOM.render( < App doodevents = {
            state.doodevents
        }
        />, document.getElementById('root'));
        registerServiceWorker();