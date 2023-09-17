
import PropTypes from 'prop-types'
import Container from "../components/Container/Container";
import Filter from "../components/Filter/Filter";
import CarList from "../components/CarList/CarList";

const FavoritesPage = ({ favorites, setFavorites }) => {
	return (
		<Container>
			<Filter />
			{favorites?.length > 0 ? (
				<CarList
					cars={favorites}
					favorites={favorites}
					setFavorites={setFavorites}
				/>
			) : (
				<h2>You haven't added any cars to favorites</h2>
			)}
		</Container>
	);
};

FavoritesPage.propTypes = {
	favorites: PropTypes.array.isRequired,
	setFavorites: PropTypes.func.isRequired,
};

export default FavoritesPage