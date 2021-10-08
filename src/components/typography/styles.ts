import styled from 'styled-components';

export const variantMapping = {
	h1: styled.h1`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.h1.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.h1.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.h1.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.h1.mobile.fontWeight};
		}
	`,
	h2: styled.h2`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.h2.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.h2.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.h2.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.h2.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.h2.mobile.fontWeight};
		}
	`,
	h3: styled.h3`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.h3.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.h3.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.h3.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.h3.mobile.fontWeight};
		}
	`,
	h4: styled.h4`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.h4.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.h4.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.h4.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.h4.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.h4.mobile.fontWeight};
		}
	`,
	h5: styled.h5`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.h5.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.h5.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.h5.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.h5.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.h5.mobile.fontWeight};
		}
	`,
	button: styled.span`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.button.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.button.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.button.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.button.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.button.mobile.fontWeight};
		}
	`,
	link: styled.span`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.link.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.link.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.link.fontFamily};
		text-decoration: underline;
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.link.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.link.mobile.fontWeight};
		}
	`,
	p1: styled.p`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.p1.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.p1.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.p1.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.p1.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.p1.mobile.fontWeight};
		}
	`,
  	p2: styled.p`
	  	transition-property: all;
	  	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	  	transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.p2.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.p2.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.p2.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.p2.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.p2.mobile.fontWeight};
		}
	`,
	p3: styled.p`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.p3.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.p3.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.p3.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.p3.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.p3.mobile.fontWeight};
		}
	`,
	p4: styled.p`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.p4.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.p4.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.p4.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.p4.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.p4.mobile.fontWeight};
		}
	`,
	overline: styled.p`
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
		color: ${(props) => props.theme.colors[props.color!]};
		font-size: ${(props) => props.theme.typography.overline.desktop.fontSize};
		font-weight: ${(props) => props.theme.typography.overline.desktop.fontWeight};
		font-family: ${(props) => props.theme.typography.overline.fontFamily};
		@media (max-width: 834px) {
			font-size: ${(props) => props.theme.typography.overline.mobile.fontSize};
			font-weight: ${(props) => props.theme.typography.overline.mobile.fontWeight};
		}
	`,
};
