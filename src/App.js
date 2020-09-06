import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Header } from './components/header/header.component';
import { InfoCard } from './components/info-card/info-card.component';
import Contacts from './components/contacts/contacts.component';
import { CompanyDetails }  from './components/company-details/company-details.component';

import CompanyData from './assets/data/company';


import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      tabIndex: 0
    }
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <InfoCard company={CompanyData} />
        <Tabs className='tab' selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
          <TabList id='tablist'>
            <Tab>Details</Tab>
            <Tab>Contacts</Tab>
          </TabList>
          <TabPanel>
            <CompanyDetails company={CompanyData} />            
          </TabPanel>
          <TabPanel>
            <Contacts employees={CompanyData.employees} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
