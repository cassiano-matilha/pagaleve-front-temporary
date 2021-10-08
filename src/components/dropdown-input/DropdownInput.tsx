import React from 'react';
import { IProps } from './interfaces';
import Dropdown from 'react-dropdown';
import './styles.css';
import { Container } from './styles';
import Icon from 'src/components/icon';

const DropdownInput: React.FC<IProps> = ({children, ...props}) => {
    let icon = (
        <Icon className="dropdown-icon" name="arrowDown"/>
    )
    return (
        <Container className={props.className}>
            <Dropdown
                options={props.options}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
                className="dropdown-input"
                arrowOpen={icon}
            >
            </Dropdown>
        </Container>
    )
}

export default DropdownInput;
