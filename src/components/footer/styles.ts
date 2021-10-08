import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 500px;
    position: absolute;
    bottom: 0;
    @media (max-width: 834px) {
        height: 780px;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 450px;
    background-color: ${(props) => props.theme.colors.dark};
    box-shadow: 0px 15px 10px -10px ${(props) => props.theme.colors.darkerGray};
    display: flex;
    justify-content: center;
    padding-top: 80px;
    @media (max-width: 834px) {
        height: 730px;
        padding-top: 56px;
    }
`

export const Bottom = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`