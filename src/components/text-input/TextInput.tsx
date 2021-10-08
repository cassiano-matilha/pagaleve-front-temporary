import React from 'react';
import { IProps } from './interfaces';
import { Container, Input, ErrorMessage } from './styles';

const TextInput: React.FC<IProps> = ({children, ...props}) => {
    return (
        <Container className={props.className}>
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

export default TextInput;