import React from 'react';
import './index.css';
import Typography from '../../../../components/typography';
import IconCard from '../../../../components/icon-card';
import Icon from '../../../../components/icon';
//import Grafism from '../../../../components/grafism';

class Advantages extends React.Component<{}, {}> {
    constructor(props:any) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event:any) {
    }

    render() {
        return (
            <div id='advantages-retailer'>
                <div className='content'>
                    <Typography className="excerpt desktop" color="black" variant="h3">Fazer uma parceria com a Pagaleve é <span className="pink-text">fácil e rápido</span></Typography>
                    <Typography className="excerpt mobile" color="black" variant="h2">Fazer uma parceria com a Pagaleve é <span className="pink-text">fácil e rápido</span></Typography>
                    <div className="cards-container">
                        <IconCard className="card">
                            <Icon name="colorHeadset" size="huge" className="icon"/>
                            <Typography className="item" color="pink" variant="p1">Entre em contato com o nosso time comercial</Typography>
                            <Typography className="description" color="black" variant="p3">Converse com um de nossos consultores e venha fazer parte desse novo mundo</Typography>
                        </IconCard>
                        <IconCard className="card">
                            <Icon name="colorPhone" size="huge" className="icon"/>
                            <Typography className="item" color="pink" variant="p1">Integre com a nossa plataforma</Typography>
                            <Typography className="description" color="black" variant="p3">Temos APIs com todos as principais plataformas de ecommerce e payment gateways</Typography>
                        </IconCard>
                        <IconCard className="card">
                            <Icon name="colorCart" size="huge" className="icon"/>
                            <Typography className="item" color="pink" variant="p1">E você estará pronto para vender e ganhar mais</Typography>
                            <Typography className="description" color="black" variant="p3">Pronto, agora sua loja já pode começar a aproveitar os benefícios da parceria</Typography>
                        </IconCard>
                    </div>
                </div>
                {/*<Grafism index={0} className="grafism-top desktop"/>
                <Grafism index={1} className="grafism-bottom desktop"/>
                <Grafism index={0} mobile={true} className="grafism-first mobile"/>
                <Grafism index={1} mobile={true} className="grafism-second mobile"/>
                <Grafism index={2} mobile={true} className="grafism-third mobile"/>
                <Grafism index={3} mobile={true} className="grafism-fourth mobile"/>*/}
            </div>
        )
    }
}
export default Advantages;
