import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { NavButton } from "../Buttons/Buttons.styled";
import { NavStyled, NavContainer } from "./Navigation.styled";
import Logo from "../../assets/images/logo.webp"

const Nav = () => {
	return (
		<NavStyled>
			<NavLink to="/">
				<img src={Logo} width="55" />
			</NavLink>
			<NavContainer>
				<NavLink to="/">
					<NavButton className="btn" type="buttob">
						<p>Home</p>
					</NavButton>
				</NavLink>
				<NavLink to="/catalog">
					<NavButton className="btn" type="buttob">
						<p>Catalog</p>
					</NavButton>
				</NavLink>
				<NavLink to="/favorites">
					<NavButton className="btn" type="buttob">
						<p>Favorites</p>
					</NavButton>
				</NavLink>
			</NavContainer>
		</NavStyled>
	);
};

Nav.propTypes = {};

export default Nav;
