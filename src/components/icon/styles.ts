
import styled from 'styled-components';
import { IContainerProps } from './interfaces';

const getSize = (size:string) => {
	switch(size) {
		case 'small':
			return '16px';
		case 'medium':
			return '24px';
		case 'large':
			return '32px;';
		case 'huge':
			return '120px';
		default:
			return '16px;'
	}
}

export const Container = styled.div<IContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => getSize(props.size!)};
	height: ${(props) => getSize(props.size!)};
`;

export const Img = styled.img`
	object-fit: contain;
	width: 100%;
	height: 100%;
`;