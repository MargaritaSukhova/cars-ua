import { NavLink } from "react-router-dom";
import { NavButton } from "../Buttons/Buttons.styled";
import { NavStyled, NavContainer, StyledLink } from "./Navigation.styled";
import Logo from "../../assets/images/logo.webp";

const Nav = () => {
	return (
		<NavStyled>
			<NavLink to="/">
				<img src={Logo} width="55" />
			</NavLink>
			<NavContainer>
				<StyledLink to="/">
					<NavButton className="btn" type="buttob">
						<p>Home</p>
					</NavButton>
				</StyledLink>
				<StyledLink to="/catalog">
					<NavButton className="btn" type="buttob">
						<p>Catalog</p>
					</NavButton>
				</StyledLink>
				<StyledLink to="/favorites">
					<NavButton className="btn" type="buttob">
						<p>Favorites</p>
					</NavButton>
				</StyledLink>
			</NavContainer>
		</NavStyled>
	);
};


export default Nav;
