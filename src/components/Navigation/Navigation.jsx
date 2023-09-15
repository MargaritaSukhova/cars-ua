import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/catalog">Catalog</NavLink>
			<NavLink to="/favorites">Favorites</NavLink>
		</nav>
	);
};

Nav.propTypes = {};

export default Nav;
