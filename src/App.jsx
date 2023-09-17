import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
// import HomePage from "../src/pages/HomePage";
// import CatalogPage from "../src/pages/CatalogPage";
// import FavoritesPage from "../src/pages/FavoritesPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../src/pages/HomePage"));
const CatalogPage = lazy(() => import("../src/pages/CatalogPage"));
const FavoritesPage = lazy(() => import("../src/pages/FavoritesPage"));

const App = () => {
	// const [favorites, setFavorites] = useState(() => 
	// 	JSON.parse(window.localStorage.getItem("favorites")) || []
	// );

	// useEffect(() => {
	// 	window.localStorage.setItem("favorites", JSON.stringify(favorites));
	// }, [favorites])

	const [favorites, setFavorites] = useLocalStorage("favorites", []);

	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route
						path="/catalog"
						element={
							<CatalogPage favorites={favorites} setFavorites={setFavorites} />
						}
					/>
					<Route
						path="/favorites"
						element={
							<FavoritesPage
								favorites={favorites}
								setFavorites={setFavorites}
							/>
						}
					/>
				</Route>
				<Route path="*" element={<HomePage />} />
			</Routes>
		</>
	);
};

export default App;
