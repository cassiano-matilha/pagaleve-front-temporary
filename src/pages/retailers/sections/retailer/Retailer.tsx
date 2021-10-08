import React from 'react';
import './index.css';
import { retailerBottom } from '../../../../../public/images/temporary';
import { parenthesis } from '../../../../../public/images/grafism';
import Typography from 'src/components/typography';
import Button from 'src/components/button';

class Retailer extends React.Component<{}, {}> {
    render() {
        return (
            <div id='novo-meio'>
                <div className="grid">
                    <div className="text">
                        <div className="parenthesis-wrapper">
                            <img className="parenthesis left" alt="Parenthesis left" src={parenthesis.left}/>
                            <Typography variant="h3" color="black">Mais do que um novo meio, um meio completamente novo</Typography>
                            <img className="parenthesis right" alt="Parenthesis right" src={parenthesis.right}/>
                        </div>
                        <Typography variant="p2" color="black">Com a Pagaleve, seu cliente compra parcelado e você recebe adiantado. Combinou? Tá combinado.</Typography>
                        <Button color="white" bg="black" to="/cadastro-varejista">Faça parte</Button>
                    </div>
                    <img className="person-image" alt="person" src={retailerBottom[0]}/>
                </div>
            </div>
        )
    }
}
export default Retailer;