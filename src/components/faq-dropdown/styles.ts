
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const List = styled.ul`
    width: 100%;
`;

export const ListItem = styled.li`
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const QuestionContainer = styled.div`
    min-height: 72px;
    padding: 16px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray};
    display: flex;
    align-items: center;
    width: 100%;
`
export const IconContainer = styled.div`
    height: 40px;
    width: 40px;
    flex-shrink: 0;
    background: ${(props) => props.theme.colors.gray};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-right: 24px;
`
export const ArrowContainer = styled.div`
    width: 96px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    @media (max-width: 834px) {
        padding: 0;
        width: 24px;
    }
`
export const AnswerContainer = styled.div`
    width: 100%;
    padding: 24px 36px;
    @media (max-width: 834px) {
        padding: 16px 0px 16px 64px;
    }
`