import PropTypes from "prop-types";
import { AppBar } from "./Header.styled";

const Header = ({ children }) => {
	return <AppBar>{children}</AppBar>;
};

Header.propTypes = {
	children: PropTypes.node,
};

export default Header;
