import React from 'react';
import './index.css';
import { desktopSignUp } from '../../../../../public/images/temporary'
import Typography from '../../../../components/typography';
import Button from '../../../../components/button';

class SignUp extends React.Component<{}, {}> {

    render() {
        return (
            <div id='sign-up'>
                <div className="black-card"></div>
                <div className="content-container">
                    <div className="content">
                        <Typography className="title" variant="h3" color="white">Crie sua conta e combine com a gente!</Typography>
                        <Typography className="excerpt" variant="p2" color="white">Ficou curioso em como funcionamos e quer criar sua conta? Para saber mais sobre nosso processo de sign up, basta clicar no botão abaixo</Typography>
                        <Button border="green" color="white" hoverColor="black" hoverBg="green" to="/ajuda">Saiba mais</Button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={desktopSignUp} className="image" alt="Desktop signup"/>
                </div>
            </div>
        )
    }
}
export default SignUp;