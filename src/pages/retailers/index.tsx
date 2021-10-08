import HeroRetailer from './sections/hero';
import Advantages from './sections/advantages';
import Benefits from './sections/benefits';
import Statistics from './sections/statistics';
import Retailer from './sections/retailer';
import React from 'react';
import './index.css';

//import styles from './index.module.css';
class RetailerPage extends React.Component<{}, {ref:any}> {
    render() {
        return (
            <div id="retailer-page">
                <HeroRetailer/>
                <Statistics/>
                <Advantages/>
                <Benefits/>
                <Retailer/>
            </div>
        )
    }
}

export default RetailerPage;
