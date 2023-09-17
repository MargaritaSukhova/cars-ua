import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const NavStyled = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	height: 100%;
`;

export const NavContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledLink = styled(NavLink)`
	transition: transform 250ms ease;
	border-radius: 12px;
	&.active {

		box-shadow: inset 2px 2px 4px -1px rgba(0, 87, 184, 1),
			inset -2px -2px 4px -1px rgba(0, 87, 184, 1),
			-0.5px -0.5px 0px rgba(0, 87, 184, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
			0px 12px 10px -10px rgba(0, 0, 0, 0.05);
		transform: scale(90%);
	}
	:hover {
		box-shadow: inset 2px 2px 4px -1px rgba(0, 87, 184, 1),
			inset -2px -2px 4px -1px rgba(0, 87, 184, 1),
			-0.5px -0.5px 0px rgba(0, 87, 184, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
			0px 12px 10px -10px rgba(0, 0, 0, 0.05);
		transform: scale(90%);
	}
`;
