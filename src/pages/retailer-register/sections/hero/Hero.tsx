import React from 'react';
import './index.css';
import Typography from '../../../../components/typography';

class Hero extends React.Component<{}, {scrollHeight:number}> {

    render() {
        return (
            <div id='hero-retailer-form'>
                <Typography variant="h1" className="title">Gostou? Então entre em contato através do formulário abaixo</Typography>
                <Typography variant="p3" className="text">Caso queira entender mais sobre como a Pagaleve pode contribuir muito para o seu negócio vender mais e ficar mais rentável, basta responder às perguntinhas abaixo. Uma pessoa do nosso time retornará para você o quanto antes.</Typography>
            </div>
        )
    }
}
export default Hero;
