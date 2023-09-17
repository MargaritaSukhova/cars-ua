import PropTypes from "prop-types";
import { Favorites } from "./Buttons.styled";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as HeartBlue } from "../../assets/icons/heart-blue.svg";

export const FavoritesButton = ({ id, cars, favorites, setFavorites }) => {
	const isFavorite = (id) =>
		favorites.find((car) => car.id === id) !== undefined;

	const addToFavorites = (id) => {
		const favorite = cars.find((car) => car.id === id);

		setFavorites((prevState) => [...prevState, favorite]);
	};

	const removeFromFavorites = (id) => {
		if (isFavorite(id)) {
			const newFavorites = favorites.filter((car) => car.id !== id);
			setFavorites(newFavorites);
		}
	};

	return (
		<Favorites
			type="button"
			onClick={
				isFavorite(id)
					? () => removeFromFavorites(id)
					: () => addToFavorites(id)
			}
		>
			{!isFavorite(id) ? (
				<Heart style={{ width: 18, height: 18 }} />
			) : (
				<HeartBlue style={{ width: 18, height: 18 }} />
			)}
		</Favorites>
	);
};

FavoritesButton.propTypes = {
	id: PropTypes.number.isRequired,
	cars: PropTypes.array.isRequired,
	favorites: PropTypes.array.isRequired,
	setFavorites: PropTypes.func.isRequired,
};

