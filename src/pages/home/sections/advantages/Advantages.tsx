import React from 'react';
import './index.css';
import Typography from '../../../../components/typography';
import IconCard from '../../../../components/icon-card';
import Icon from '../../../../components/icon';
import Grafism from '../../../../components/grafism';

class Advantages extends React.Component<{}, {list:Array<any>}> {
    constructor(props:any) {
        super(props);
        this.state = {list: []}
        fetch('https://wordpress-api.pagaleve.com.br/wp-json/acf/v3/options/options/advantages', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            let list = data['advantages'].map((a:any, index:number) => {
                a.id = index;
                return a;
            })
            this.setState({
                list: list
            })
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event:any) {
        //let currentScroll = event.currentTarget.scrollY;
        //console.log(currentScroll);
    }

    render() {
        return (
            <div id='advantages'>
                <div className='content'>
                    <Typography className="title" color="pink" variant="p1">Vantagens</Typography>
                    <Typography className="excerpt desktop" color="black" variant="h3">Fique leve com nossas vantagens</Typography>
                    <Typography className="excerpt mobile" color="black" variant="h2">Fique leve com nossas vantagens</Typography>
                    <div className="cards-container">
                        {this.state.list.map((a:any) => {
                            return (
                                <IconCard className="card">
                                    <Icon name={a.icone} size="huge" className="icon"/>
                                    <Typography className="item" color="black" variant="h5">{a.titulo}</Typography>
                                    <Typography className="description" color="black" variant="p2">{a.texto}</Typography>
                                </IconCard>
                            )
                        })}
                    </div>
                </div>
                <Grafism index={0} className="grafism-top desktop"/>
                <Grafism index={1} className="grafism-bottom desktop"/>
                <Grafism index={0} mobile={true} className="grafism-first mobile"/>
                <Grafism index={1} mobile={true} className="grafism-second mobile"/>
                <Grafism index={2} mobile={true} className="grafism-third mobile"/>
                <Grafism index={3} mobile={true} className="grafism-fourth mobile"/>
            </div>
        )
    }
}
export default Advantages;
