import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

const SharedLayout = () => {
	return (
		<div>
			<Header>
				<Navigation />
			</Header>
			<Outlet />
		</div>
	);
};

export default SharedLayout;
