
import styled from 'styled-components';

export const IconContainer = styled.div`
    grid-column-start: 12;
    display: flex;
    align-items: center;
    justify-content: end;
`

export const NavItem = styled.li`
    display: inline;
    height: 100%;
    margin-right: 48px;
    & a {
        height: 100%;
        display: flex;
        align-items: center;
        &:hover {
            & p {
                transition: text-shadow 500ms;
                text-shadow: 0 0 .65px #333, 0 0 .65px #333;
            }
        }
    }
    
    @media (max-width: 834px) {
        padding-bottom: 20px;
        padding-top: 20px;
        border-bottom: 0.5px solid ${(props) => props.theme.colors.gray};
        width: 100%;
        &:last-child {
            border-bottom: none;
        }
    }
`

export const MobileContainer = styled.div`
    height: calc(100vh - 80px);
    width: 100vw;
    margin-top: 80px;
    position: absolute;
    transform: translateX(100%);
    top: 0;
    left: 0;
    background: ${(props) => props.theme.colors.white};
`

export const Container = styled.div`
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 82px;
    position: fixed;
    top: 0;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
    background: ${(props) => props.theme.colors.white};
    @media (max-width: 834px) {
        height: 80px;
    }
`;

export const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: 1fr auto;
    max-width: 1344px;
    padding-left: 24px;
    padding-right: 24px;
    @media (max-width: 834px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        padding: 0px;
        margin-left: 24px;
        margin-right: 24px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    grid-column: span 2 / span 2;
`;

export const Logo = styled.img`
    height: 32px;
    width: auto;
    object-fit: contain;
`;

export const NavBar = styled.ul`
    display: flex;
    align-items: center;
    grid-column-start: 3;
    grid-column: span 10 / span 10;
    @media (max-width: 834px) {
        margin: 52px 24px 0 24px;
        flex-direction: column;
        align-items: start;
    }
`
