import React, { Suspense } from 'react';
import { SearchBox } from '../search-box/search-box.component';

import './contacts.styles.css';

//import Cardlist from '../card-list/card-list.component';
const Cardlist = React.lazy(() => import('../card-list/card-list.component'));

class Contacts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employees : this.props.employees,
            searchField: ''
        }
    }

    handleChange = (e) => {
        this.setState( { searchField : e.target.value });
    }

    render(){
        const { employees, searchField } = this.state;
        const filteredEmployees = employees.filter( employee => 
            employee.name.toLowerCase().includes(searchField.toLowerCase()) || 
            employee.position.toLowerCase().includes(searchField.toLowerCase())
        ) ;

        return (
            <div className='contacts-container'>
                <div className='searchbox-container'>
                    <SearchBox 
                        placeholder='Search Employees by Name, job title'
                        handleChange = { this.handleChange }
                    />
                </div>
                <div className='contacts-card-container'>
                    <Suspense fallback={<div className='loading-div'>Loading...</div>} >
                      <Cardlist employees={filteredEmployees} />
                    </Suspense>
                </div>
            </div>
        )
    }
}

export default Contacts;