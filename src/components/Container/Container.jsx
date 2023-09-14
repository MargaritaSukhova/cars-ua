import { ContainerStyled } from "./Container.styled";

import PropTypes from "prop-types";

const Container = (props) => {
	const { children } = props;
	return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = {
	children: PropTypes.node,
};

export default Container;