import React from 'react';
import './detail.styles.css';

export const Detail = props => {
    return (
    <div className='detail-area'>
        <p className='detail-field'>{props.field}</p>
        <p className='detail-value'>{props.value}</p>
    </div>
)};