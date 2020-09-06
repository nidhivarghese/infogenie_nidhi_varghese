import React from 'react';
import { Detail } from '../detail/detail.component';

import './company-details.styles.css';


export const CompanyDetails = props => (
    <div className='company-details'>
        <div>
            <Detail field='Company Name' value={props.company.name} />
            <Detail field='Address' value={props.company.address} />
            <Detail field='Phone' value={props.company.phone} />
            <Detail field='Website' value={props.company.url} />
            <Detail field='Ownership' value={props.company.ownership} />
            <Detail field='LinkedIn Url' value={props.company.linkedinUrl} />
            <Detail field='Parent Company' value={props.company.parentCompany} />
        </div>
        <div>
            <Detail field='Primary Industry' value={props.company.primaryIndustry} />
            <Detail field='Revenue' value={props.company.revenue} />
            <Detail field='Enmployee Size' value={props.company.employeeSize} />
            <Detail field='SIC' value={props.company.sic} />
            <Detail field='NAICS' value={props.company.naics} />
            <Detail field='All Industry' value={props.company.allIndustry} />
            <Detail field='All SIC' value={props.company.allsic} />
        </div>
    </div>
);