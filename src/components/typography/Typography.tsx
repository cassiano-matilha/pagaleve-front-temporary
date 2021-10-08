import React from 'react';
import { IProps } from './interfaces';
import { variantMapping } from './styles';

const Typography: React.FC<IProps> = ({ children, ...props }) => {
	const Component = variantMapping[props.variant || 'p1'];
	return (
		<Component color={props.color} className={props.className}>
			{children}
		</Component>
	);
};

const defaultProps = {	
	variant: 'p1',
	color: 'black',
	mobile: false,
}

Typography.defaultProps = defaultProps;

export default Typography;
