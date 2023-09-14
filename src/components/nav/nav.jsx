import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const nav = (props) => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/catalog">Catalog</NavLink>
			<NavLink to="/favorites">Favorites</NavLink>
		</nav>
	);
};

nav.propTypes = {};

export default nav;
