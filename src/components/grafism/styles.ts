import styled from 'styled-components';
import { ContainerProps } from './interfaces';

export const Container = styled.div<ContainerProps>`
    position: absolute;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`
export const Image = styled.img`
    position: relative;
    animation: float 4s ease-in-out infinite;
    
    @media (max-width: 834px) {
        animation: light-float 4s ease-in-out infinite;
    }
`