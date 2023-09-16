import { Favorites } from "./Buttons.styled";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as HeartBlue } from "../../assets/icons/heart-blue.svg";

export const FavoritesButton = ({ id, cars, favorites, setFavorites }) => {
	// const isFavorite = favorites.includes(id);

	const isFavorite = (id) =>
		favorites.find((car) => car.id === id) !== undefined;

	// const addToFavorites = (id) => {
	// 	setFavorites((prevState) => [...prevState, id]);
	// };

	const addToFavorites = (id) => {
		// 	console.log(id);
		const favorite = cars.find((car) => car.id === id);

		setFavorites((prevState) => [...prevState, favorite]);
	};

	// const removeFromFavorites = (id) => {
	// 	// console.log(isFavorite(id));
	// 	if (isFavorite) {
	// 		// const index = favorites.findIndex((car) => car.id === id);
	// 		const newFavorites = favorites.filter((item) => item !== id);
	// 		// const newFavorites = ...favorites.splice(index, 1);
	// 		setFavorites(newFavorites);
	// 		console.log(favorites);
	// 	}
	// };

	const removeFromFavorites = (id) => {
		// console.log(isFavorite(id));
		if (isFavorite(id)) {
			const newFavorites = favorites.filter((car) => car.id !== id);
			setFavorites(newFavorites);
			// const index = favorites.findIndex((car) => car.id === id);
			// favorites.splice(index, 1);
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
