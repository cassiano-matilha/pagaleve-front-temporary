import React from 'react';
import './index.css';
import Typography from 'src/components/typography';
//import Button from 'src/components/button';
import Grafism from 'src/components/grafism';
import IconFloating from 'src/components/icon-floating';
import { retailerCashier } from '../../../../../public/images/temporary';

class Retailer extends React.Component<{}, {call:string, description:string}> {
    constructor(props:any) {
        super(props);
        this.state = {
            call: '',
            description: ''
        }
        fetch('https://wordpress-api.pagaleve.com.br/wp-json/acf/v3/options/options/retailer-title', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            this.setState({call: data['retailer-title']})
        });
        fetch('https://wordpress-api.pagaleve.com.br/wp-json/acf/v3/options/options/retailer_text', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            this.setState({description: data['retailer_text']})
        });
    }
    render() {
        return (
            <div id='varejista'>
                <div className="grid">
                    <div className="content">
                        <Typography className="call desktop" variant="h3">{this.state.call}</Typography>
                        <Typography className="call mobile" variant="h2">{this.state.call}</Typography>
                        <Typography variant="p2" className="description">{this.state.description}</Typography>
                        {/*<Button variant="tertiary" to="/" color="pink" hoverColor="green">Saiba mais</Button>*/}
                    </div>
                    <div className="image-container">
                        <IconFloating name="greenMoney" className="floating-icon floating-money"/>
                        <IconFloating name="pinkBox" className="floating-icon floating-box"/>
                        <IconFloating name="pinkTicket" className="floating-icon floating-ticket"/>
                        <img src={retailerCashier} alt="Retailer" className="retailer-img"/>
                    </div>
                </div>
                <Grafism className="grafism-bottom desktop" index={1}/>
            </div>
        )
    }
}
export default Retailer;