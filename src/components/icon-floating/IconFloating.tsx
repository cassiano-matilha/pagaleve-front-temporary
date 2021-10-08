import React from 'react';
import Icons from '../../../public/icons';
import { IProps } from './interfaces';
import { Container, Img } from './styles';

const IconFloating: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <Container className={props.className}>
            <Img src={Icons[props.name]}  alt={props.name}/>
        </Container>
    );
};
const defaultProps = {
	name: '',
}
IconFloating.defaultProps = defaultProps;

export default IconFloating;
