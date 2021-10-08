import Hero from './sections/hero';
import Advantages from './sections/advantages';
import FirstStep from './sections/first-step';
import SignUp from './sections/sign-up';
import Retailer from './sections/retailer';
import React from 'react';
import './index.css';

//import styles from './index.module.css';
class Home extends React.Component<{}, {ref:any}> {
    constructor(props:any) {
        super(props);
        this.handleRefAdded = this.handleRefAdded.bind(this);
    }
    ref: any;
    handleRefAdded(ref:any) {
        this.ref = ref;
    }
    render() {
        return (
            <div id="home">
                <Hero/>
                <Advantages/>
                <FirstStep onRefCreated={this.handleRefAdded}/>
                <SignUp/>
                <Retailer/>
            </div>
        )
    }
}

export default Home;
