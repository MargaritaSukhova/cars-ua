import styled from "@emotion/styled";

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	background: #3470ff;
	color: #fff;
	font-family: Manrope;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 20px;
	transition: background 250ms ease;
	:hover {
		background: #0b44cd;
	}
	:focus {
		background: #0b44cd;
	}
	:active {
		background: #0b44cd;
	}
`;

export const LearnMoreButton = styled(Button)`
	padding: 12px 99px;
`;

export const SearchButton = styled(Button)`
	padding: 14px 44px;
`;

export const RentalCarButton = styled(Button)`
	padding: 12px 50px;
`;

export const Favorites = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	background-color: transparent;
	transition: transform 250ms ease;
	:hover {
		transform: scale(1.2);
	}
`;

export const LoadMoreButton = styled.button`
	color: #3470ff;
	font-family: Manrope;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	text-decoration-line: underline;
	border: 0;
	background-color: transparent;
`;
