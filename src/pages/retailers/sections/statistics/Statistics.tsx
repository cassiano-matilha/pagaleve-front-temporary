import React from 'react';
import './index.css';
import Typography from '../../../../components/typography';

class Statistics extends React.Component<{}, {}> {

    render() {
        return (
            <div id='statistics'>
                <div className="grid">
                    <div className="grid-content">
                        <Typography className="title" variant="h2" color="white">Varejistas que usam serviços <br/>como o da Pagaleve</Typography>
                        <Typography className="title" variant="p1" color="white">têm tipicamente retornos de</Typography>
                        <div className="stats-container">
                            <div className="stat">
                                <Typography variant="h2" color="green">25% a 40%</Typography>
                                <Typography variant="p1" color="white">de aumento da</Typography>
                                <Typography variant="p1" color="green">taxa de conversão</Typography>
                            </div>
                            <div className="stat">
                                <Typography variant="h2" color="green">30% a 50%</Typography>
                                <Typography variant="p1" color="white">de aumento do</Typography>
                                <Typography variant="p1" color="green">ticket médio</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Statistics;