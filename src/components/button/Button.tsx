import React from 'react';
import Icon from '../icon';
import Typography from '../typography';
import { Link } from 'react-router-dom';
import { IProps } from './interfaces';
import { PrimaryAction, IconContainer, TertiaryAction } from './styles';

const defaultProps = {
    color: 'black',
    disabled: false,
    size: 'medium',
    variant: 'primary',
    className: '',
    bg: 'transparent',
    border: 'black',
    to: '',
    hoverBg: '',
    hoverColor: '',
    hoverBorder:''
}
const Button: React.FC<IProps> = ({ children, ...props }) => {
    var button;
    if (props.variant === 'primary') {
        button = (
            <PrimaryAction hoverBorder={props.hoverBorder} hoverColor={props.hoverColor} hoverBg={props.hoverBg} bg={props.bg} border={props.border} size={props.size} className={props.className} onClick={props.onClick} disabled={props.disabled}>
                <Typography className="button-text" variant='button' color={props.color}>{children}</Typography>
                <IconContainer><Icon name="navRight" size="small"/></IconContainer>
            </PrimaryAction>
        )
    } else if (props.variant === 'secondary') {
        button = null;
    } else if (props.variant === 'tertiary') {
        button = (
            <TertiaryAction className={props.className} hoverColor={props.hoverColor} onClick={props.onClick} disabled={props.disabled}>
                <Typography className="button-text" variant='link' color={props.color}>{children}</Typography>
            </TertiaryAction>
        )
    }
    if (props.to) {
        return (
            <Link to={props.to}>{button}</Link>
        )
    } else {
        return <div>{button}</div>;
    }
}

Button.defaultProps = defaultProps;

export default Button;