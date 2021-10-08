import styled from 'styled-components';

export const Card = styled.div`
    height: 370px;
    width: 260px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors['gray']};
    border-radius: 16px;
`
