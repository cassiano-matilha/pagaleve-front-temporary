import React from 'react'
import Typography from '../typography';
import Icon from '../icon';
import { HashLink } from 'react-router-hash-link';
import { Container, Content, Bottom } from './styles';
import './styles.css';
const Footer: React.FC<{}> = ({ children }) => {
    return (
        <Container id="footer">
            <Content>
                <div className="footer-grid">
                    <Icon size="large" name="logo" className="logo"/>
                    <Typography variant="h4" color="white" className="call">Leve a vida com mais leveza.</Typography>
                    <div className="items-first-column">
                        <HashLink smooth to="/"><Typography variant="p2" color="white" className="item">Home</Typography></HashLink>
                        <HashLink smooth to="/#first-step"><Typography variant="p2" color="white" className="item">Como funciona</Typography></HashLink>
                        <HashLink smooth to="/cliente"><Typography variant="p2" color="white" className="item">Cliente</Typography></HashLink>
                    </div>
                    <div className="items-second-column">
                        <HashLink smooth to="/varejista"><Typography variant="p2" color="white" className="item">Varejista</Typography></HashLink>
                        <HashLink smooth to="/ajuda"><Typography variant="p2" color="white" className="item">Ajuda</Typography></HashLink>
                        <HashLink smooth to="/ajuda-varejista"><Typography variant="p2" color="white" className="item">Ajuda - Varejista</Typography></HashLink>
                    </div>
                    <div className="contato">
                        <HashLink smooth to="/termos-de-uso"><Typography variant="p2" color="white" className="item">Termos de Uso</Typography></HashLink>
                        <HashLink smooth to="/contato"><Typography variant="p2" color="white" className="item">Contato</Typography></HashLink>
                    </div>
                    <div className="cnpj">
                        <Typography className="code" variant="p3" color="white">CNPJ 42.563.672/0001-55</Typography>
                        <Typography className="name" variant="p3" color="white">Pagaleve Tecnologia Financeira Ltda.</Typography>
                    </div>
                </div>
            </Content>
            <Bottom>
                <Icon name="heartLogo" size="medium" className="heart"/>
                <Typography variant="p3" color="darkerBlue">Feito com amor no Brasil</Typography>
            </Bottom>
        </Container>
    )
}

export default Footer;