import React from 'react';
import './index.css';
import Typography from 'src/components/typography';
import Button from 'src/components/button';
import { heroRetailer } from '../../../../../public/images/temporary';

class HeroRetailer extends React.Component<{}, {image: number}> {
    constructor(props:any) {
        super(props);
        this.state = {
            image: 1
        }
    }
    render() {
        return (
            <div id='hero-retailer'>
                <div className='hero-grid'>
                    <div className='content'>
                        <Typography variant="h3" className='call'>
                            Impulsione suas vendas, aumente o fluxo de caixa e atraia novos clientes!
                        </Typography>
                        <Typography variant="p2" className='excerpt'>
                            Com a Pagaleve, seu cliente compra parcelado e você recebe adiantado
                        </Typography>
                        <div className="button-container">
                            <Button bg="black" color="white" hoverBg="white" hoverColor="black" to="/cadastro-varejista">Se inscreva</Button>
                        </div>
                    </div>
                </div>
                <img src={heroRetailer[this.state.image]} alt="Desktop hero" className="hero-image desktop"/>
                <img src={heroRetailer[this.state.image]} alt="Mobile hero" className="hero-image mobile"/>
            </div>
        )
    }
}

export default HeroRetailer;
