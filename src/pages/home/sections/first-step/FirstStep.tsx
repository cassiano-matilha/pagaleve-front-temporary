import React from 'react';
import './index.css';
import Typography from '../../../../components/typography';
import List from '../../../../components/list';
import { phoneMock } from '../../../../../public/images/temporary';
import Grafism from '../../../../components/grafism';

class FirstStep extends React.Component<{onRefCreated: any}, {list: Array<any>}> {
    ref: any;
    constructor(props:any) {
        super(props);
        this.state = {list: []}
        fetch('https://wordpress-api.pagaleve.com.br/wp-json/acf/v3/options/options/instructions', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            let list = data['instructions'].map((instruction:any, index:number) => {
                instruction.id = index;
                return instruction;
            })
            this.setState({
                list: list
            })
        });
        this.ref = React.createRef();
    }

    componentDidMount() {
        this.props.onRefCreated(this.ref);
    }

    render() {
        return (
            <div id='first-step' ref={this.ref}>
                <div className='grid'>
                    <Typography className="title" color="black" variant="h2">Dê seu primeiro passo para um pagamento mais leve!</Typography>
                    <div className="steps">
                        <List items={this.state.list} className="list"></List>
                    </div>
                    <img className="phone-mock" src={phoneMock} alt="Mock celular"/>
                </div>
                <Grafism index={2} width="170px" className="grafism-top desktop"/>
                <Grafism index={3} width="170px" className="grafism-bottom desktop"/>
            </div>
        )
    }
}
export default FirstStep;