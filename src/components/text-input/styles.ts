import styled from 'styled-components';

export const Container = styled.div<{height?: string, width?: string}>`
    height: ${(props) => (props.height ? props.height : 'auto')};
    width: ${(props) => (props.width ? props.width : '100%')};
    position: relative;
    padding-bottom: 18px;
`

export const Input = styled.input<{invalid?: boolean}>`
    width: 100%;
    height: 100%;
    resize: none;
    padding: 8px 0;
    outline: none !important;
    color: ${(props) => props.theme.colors.darkerGray};
    border-bottom: 2px solid ${(props) => props.invalid ? props.theme.colors.darkerGray : props.theme.colors.darkGray};
    font-family: raleway;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    :focus {
        border-bottom: 2px solid ${(props) => props.invalid ? props.theme.colors.red : props.theme.colors.darkerGray};
    }
  
    ::placeholder {
        color: ${(props) => props.theme.colors.darkGray};
    }
`;

export const ErrorMessage = styled.div`
    position: absolute;
    left: 0;
    top: calc(100% - 18px);
    color: red;
    font-family: raleway;
    font-size: 12px;
    margin-top: 6px;
    color: ${(props) => props.theme.colors.orange};
`