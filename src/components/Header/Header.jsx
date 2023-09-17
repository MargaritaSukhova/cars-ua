import React from 'react'
import PropTypes from 'prop-types'
import {AppBar} from "./Header.styled"

const Header = ({ children }) => {
	return <AppBar>{children}</AppBar>;
};

Header.propTypes = {}

export default Header