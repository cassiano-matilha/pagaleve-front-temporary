import React from 'react';
import Icons from '../../../public/icons';
import { IProps } from './interfaces';
import { Container, Img } from './styles';

const Icon: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <Container size={props.size} className={props.className}>
            <Img src={Icons[props.name]} alt={props.name}/>
        </Container>
    );
};
const defaultProps = {
	name: '',
	size: 'medium'
}
Icon.defaultProps = defaultProps;

export default Icon;
