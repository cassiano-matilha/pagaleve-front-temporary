import React from 'react';
import './index.css';
import Typography from '../../../../components/typography';
import styled from 'styled-components';
import { faq } from '../../../../../public/images/grafism';

class Hero extends React.Component<{}, {scrollHeight:number}> {
    constructor(props:any) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            scrollHeight: 0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event:any) {
        let currentScroll = event.currentTarget.scrollY;
        this.setState({
            scrollHeight: currentScroll
        })
    }
    render() {
        return (
            <div id='hero-faq'>
                <LeftImage src={faq.left} left={this.state.scrollHeight} alt="Left hero image" className="desktop"/>
                <RightImage src={faq.right} right={this.state.scrollHeight} alt="Right hero image" className="desktop"/>
                <Typography variant="h1" className="title">Como podemos te ajudar?</Typography>
                <Typography variant="p2" className="text desktop">Aqui você encontra algumas perguntas feitas com frequência sobre a Pagaleve. Caso você tenha alguma dúvida que não esteja listada aqui, é só entrar em contato pelo nosso chat, no botão na parte de baixo da tela, do lado direito.</Typography>
            </div>
        )
    }
}
export default Hero;

const LeftImage = styled.img<any>`
    right: -50px;
    transform: translateX(calc(-${(props) => props.left}px / 10));
`
const RightImage = styled.img<any>`
    left: -50px;
    transform: translateX(calc(${(props) => props.right}px / 10));
`