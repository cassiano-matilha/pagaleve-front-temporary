
import styled from 'styled-components';
import { IPrimaryProps, ITertiaryProps } from './interfaces';

const getHeight = (size:string) => {
    switch(size) {
        case 'small':
            return '40px';
        case 'medium':
            return '48px';
        case 'large':
            return '56px';
        default:
            return '40px';
    }
}

export const PrimaryAction = styled.button<IPrimaryProps>`
    border-radius: 24px;
    height: ${(props) => getHeight(props.size!)};
    display: inline-flex;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
    background-color: ${(props) => props.bg ? props.theme.colors[props.bg] : props.theme.colors.white};
    border: 2px solid ${(props) => props.border ? props.theme.colors[props.border] : props.theme};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    &:hover {
        background-color: ${(props) => props.theme.colors[props.hoverBg ? props.hoverBg! : props.bg!]};
        border: 2px solid ${(props) => props.theme.colors[props.hoverBorder ? props.hoverBorder! : props.border!]};;
    }
    &:hover .button-text {
        color: ${(props) => props.theme.colors[props.hoverColor ? props.hoverColor! : props.color!]};
    }
`;

export const IconContainer = styled.div`
    margin-left: 48px;
`;

export const TertiaryAction = styled.button<ITertiaryProps>`
    cursor: pointer;
    &:hover .button-text {
        color: ${(props) => props.theme.colors[props.hoverColor ? props.hoverColor! : props.color!]};
    }
`