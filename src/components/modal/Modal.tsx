import React, { useEffect } from 'react';
import { IProps } from './interfaces';
import { Container } from './styles';
import './styles.css';

const Modal: React.FC<IProps> = ({children, ...props}) => {
    useEffect(() => {
        if (props.open) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [props.open]);
    return (
        <Container open={props.open} className={props.className + " modal"}>
            <div className="overlay"></div>
            <div className="children-container">
                {children}
            </div>
        </Container>
    )
}

export default Modal;