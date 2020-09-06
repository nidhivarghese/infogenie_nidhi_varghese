import React from 'react';
import Card from '../card/card.component';
import Loading from '../loading/loading.component';
import LazyLoad from 'react-lazyload';

import './card-list.styles.css';

const Cardlist = props => (
    <div className='card-container'>
        {props.employees.map( employee => (
            <LazyLoad key={employee.id} placeholder={<Loading />}>
                <Card key={employee.id} employee={employee} /> 
            </LazyLoad>
        ))}
    </div>
);


export default Cardlist;