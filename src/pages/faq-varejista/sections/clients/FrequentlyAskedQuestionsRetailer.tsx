import React from 'react';
import './index.css';
import Typography from 'src/components/typography';
import FaqDropdown from 'src/components/faq-dropdown';

class FrequentlyAskedQuestionsRetailer extends React.Component<{}, {itemsRetailer:Array<any>}> {
    constructor(props:any) {
        super(props);
        
        this.state = {itemsRetailer: []}
        fetch('https://wordpress-api.pagaleve.com.br/wp-json/acf/v3/options/options/faq-varejista', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => 
            this.setState({
                itemsRetailer: data['faq-varejista']
            })
        );
    }
    render() {
        return (
            <div id="faq-retailer-page">
                <div className="desktop">
                    <div className='section-faq'>
                        <div className="container">
                            <Typography variant="h3" className="title">Varejistas</Typography>
                            <FaqDropdown items={this.state.itemsRetailer} className="dropdown"></FaqDropdown>
                        </div>
                    </div>
                </div>
                <div className='section-faq mobile'>
                    <div className="container">
                        <Typography variant="h5" className="title">Perguntas frequentes</Typography>
                        <FaqDropdown items={this.state.itemsRetailer} className="dropdown"></FaqDropdown>
                    </div>
                </div>
            </div>
        )
    }
}
export default FrequentlyAskedQuestionsRetailer;
