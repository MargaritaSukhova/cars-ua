import Container from "../components/Container/Container";
import CarList from "../components/CarList/CarList";


const CatalogPage = ({ favorites, setFavorites }) => {
	return (
		<Container>
			<h2>CatalogPage </h2>

			<CarList favorites={favorites} setFavorites={setFavorites} />
		</Container>
	);
};

export default CatalogPage;
