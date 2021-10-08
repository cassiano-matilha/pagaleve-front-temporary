import styled from 'styled-components';

export const StyledList = styled.ul`
`

export const StyledItem = styled.li`
    display: flex;
    margin-bottom: 48px;
    &:last-child {
        margin-bottom: 0px;
    }
`

export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledIcon = styled.div`
    width: 72px;
    height: 72px;
    background: ${(props) => props.theme.colors.gray};
    border-radius: 100px;
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    @media (max-width: 834px) {
        width: 48px;
        height: 48px;
        margin-right: 20px;
    }
`