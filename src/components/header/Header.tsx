import React from 'react'
import Typography from '../typography';
import { HashLink } from 'react-router-hash-link';
import Icon from '../icon/';
import { Container, Grid, ImageContainer, Logo, NavBar, NavItem, IconContainer, MobileContainer } from './styles';
import './styles.css';

class Header extends React.Component<{items: Array<any>, logo:string}, {scroll: number, className: string, mobileOpen: boolean}> {
    constructor(props:any) {
        super(props);
        this.state = {scroll: 0, className: "", mobileOpen: false};
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.forceClose = this.forceClose.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event:any) {
        /*let currentScroll = event.currentTarget.scrollY;
        if (currentScroll > this.state.scroll) {
            this.setState({className: "hidden"});
        } else {
            this.setState({className: ""});
        }
        this.setState({scroll: currentScroll});*/
    }

    toggleOpen() {
        if (!this.state.mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        this.setState(prevState => ({mobileOpen: !prevState.mobileOpen}));
    }

    forceClose() {
        document.body.style.overflow = 'auto';
        this.setState({mobileOpen: false});
    }
    render() {
        return (
            <Container id="header" className={this.state.className}>
                <Grid>
                    <ImageContainer>
                        <HashLink smooth to="/"><Logo src={this.props.logo} alt="Logo"/></HashLink>
                    </ImageContainer>
                    <NavBar className="desktop">
                        {this.props.items.map(item => {
                            return (<NavItem key={item.label}><HashLink smooth to={item.to}><Typography variant="p2" color="black">{item.label}</Typography></HashLink></NavItem>)
                        })}
                    </NavBar>
                    <IconContainer className="mobile" onClick={this.toggleOpen}>
                        <Icon size="large" name={this.state.mobileOpen ? "close" : "hamburger"} ></Icon>
                    </IconContainer>
                </Grid>
                <MobileContainer className={this.state.mobileOpen ? "mobile-nav open" : "mobile-nav"}>
                    <NavBar className="mobile">
                        {this.props.items.map(item => {
                            return (
                                <NavItem onClick={this.forceClose} key={item.label}>
                                    <HashLink smooth  to={item.to} className="link">
                                        <Typography variant="p2" color="black" className="title">{item.label}</Typography>
                                        <Icon size="medium" name="navRight" ></Icon>
                                    </HashLink>
                                </NavItem>
                            )
                        })}
                    </NavBar>
                </MobileContainer>
            </Container>
        )
    }
}

export default Header;
