import React from 'react';

import './info-card.styles.css';

export const InfoCard = props => (
    <div className='info-card'>
        <div className='logo'>
            <img alt={props.company.name} src={props.company.logo} />
        </div>
        <div className='details'>
            <h1>{props.company.name}</h1>
            <p>{props.company.address}</p>
            <div className='contact'>
                <p>{props.company.url}</p> 
                <p>{props.company.phone}</p>
            </div>
        </div>
    </div>
);