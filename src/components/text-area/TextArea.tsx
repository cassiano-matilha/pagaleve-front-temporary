import React from 'react';
import Typography from '../typography';
import { IProps } from './interfaces';
import { Container, Input, ErrorMessage } from './styles';
import './styles.css';

const TextArea: React.FC<IProps> = ({children, ...props}) => {
    return (
        <Container className={props.className + " textarea"}>
            <Typography className="label" variant="p2" color="black">{props.label}</Typography>
            <Input
                placeholder={props.placeholder}
                required={true}
                value={props.value}
                onChange={props.onChange}
            ></Input>
            <ErrorMessage>{props.errorMessage}</ErrorMessage>
        </Container>
    )
}

export default TextArea;