import React from 'react';
import './index.css';
import Typography from 'src/components/typography';
import FaqDropdown from 'src/components/faq-dropdown';
import Button from 'src/components/button';
class FrequentlyAskedQuestions extends React.Component<{}, {items:Array<any>}> {
    constructor(props:any) {
        super(props);
        
        this.state = {items: []}
        fetch('https://wordpress-api.pagaleve.com.br/wp-json/acf/v3/options/options/faq-consumidor', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => 
            this.setState({
                items: data['faq-consumidor']
            })
        );
    }
    render() {
        return (
            <div id="faq-page">
                <div className="desktop">
                    <div className='section-faq'>
                        <div className="container">
                            <Typography variant="h3" className="title">Consumidores</Typography>
                            <FaqDropdown items={this.state.items} className="dropdown"></FaqDropdown>
                        </div>
                    </div>
                </div>
                <div className='mobile section-faq'>
                    <div className="container">
                        <Typography variant="h5" className="title">Perguntas frequentes</Typography>
                        <FaqDropdown items={this.state.items} className="dropdown"></FaqDropdown>
                    </div>
                </div>
                <div className="contato">
                    <Typography variant="p2" color="pink">Você é varejista e quer ajuda?</Typography>
                    <Button variant="tertiary" color="pink" hoverColor="green" to="/ajuda-varejista">Clique aqui</Button>
                </div>
            </div>
        )
    }
}
export default FrequentlyAskedQuestions;
