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
	margin-top: 100px;
`;

export const NavButton = styled.button`
	width: 124px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	padding: 1.4em;
	border-radius: 12px;
	cursor: pointer;
	transition: transform 250ms ease;

	:hover {
		box-shadow: inset 2px 2px 4px -1px rgba(0, 87, 184, 1),
			inset -2px -2px 4px -1px rgba(0, 87, 184, 1),
			-0.5px -0.5px 0px rgba(0, 87, 184, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
			0px 12px 10px -10px rgba(0, 0, 0, 0.05);
		// border: 1px solid rgba(0, 0, 0, 0.1);
		transform: scale(90%);
	}
	p {
		color: #fff;
		font-family: Manrope;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 26px;
	}
`;

export const BookButton = styled(Button)`
	padding: 12px 50px;
	margin: 0 auto;
	font-size: 18px;
	line-height: 26px;
`;