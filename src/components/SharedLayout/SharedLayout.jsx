import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader"

const SharedLayout = () => {
	return (
		<>
			<Header>
				<Navigation />
			</Header>
			<Suspense fallback={<Loader/>}>
				<Outlet />
			</Suspense>
		</>
	);
};

export default SharedLayout;
