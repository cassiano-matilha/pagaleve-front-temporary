import styled from 'styled-components';

export const Container = styled.div<{open: boolean}>`
    display: ${(props) => props.open ? 'flex' : 'none'};
`
