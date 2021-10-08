import React from 'react';
import { IProps } from './interfaces';
import { Container, Image } from './styles';
import { desktopGrafism, mobileGrafism } from '../../../public/images/grafism';
const defaultProps = {
    width: 'auto',
    height: 'auto',
    mobile: false
}

const Grafism: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <Container width={props.width!} height={props.height!} className={props.className}>
            <Image src={props.mobile ? mobileGrafism[props.index] : desktopGrafism[props.index]} alt="Grafism"/>
        </Container>
    )
}

Grafism.defaultProps = defaultProps;

export default Grafism;