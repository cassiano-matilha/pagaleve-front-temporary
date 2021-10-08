
import styled from 'styled-components';

export const Container = styled.div`
	background: ${(props) => props.theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 84px;
	height: 84px;
	border-radius: 50%;
	box-shadow: 0px 10px 20px rgba(102, 102, 102, 0.25);

    @media (max-width: 834px) {
        height: 64px;
		width: 64px;
    }
`;

export const Img = styled.img`
	object-fit: contain;
	width: 48px;
	height: 48px;
    @media (max-width: 834px) {
        height: 40px;
		width: 40px;
    }
`;