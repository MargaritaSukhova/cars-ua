import styled from "@emotion/styled";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

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

export const LearnMore = styled(Button)`
	padding: 12px 99px;
`;

export const Search = styled(Button)`
	padding: 14px 44px;
`;

export const RentalCar = styled(Button)`
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

export const HeartIcon = styled(Heart)`
	fill: rgba(255, 255, 255, 0.8);
`;
