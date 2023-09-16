import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCars } from "../../shared/api/cars-api";
import CarCard from "../CarCard/CarCard";
import { List } from "./CarList.styled";

const CarList = ({ cars, favorites, setFavorites }) => {
	// const [cars, setCars] = useState([]);

	// const isFavorite = (id) => favorites.includes(id);

	// const addToFavorites = (id) => {
	// // 	console.log(id);
	// 	const favorite = cars.find((car) => car.id === id);
	// 	console.log(favorite);
	// 	setFavorites((prevState) => [...prevState, favorite]);
	// };

	// const addToFavorites = (id) => {
	// 	setFavorites((prevState) => [...prevState, id]);
	// };

	// const removeFromFavorites = (id) => {
	// 	// console.log(isFavorite(id));
	// 	if (isFavorite(id)) {
	// 		const index = favorites.findIndex((car) => car.id === id);
	// 		favorites.splice(index, 1);
	// 		console.log(favorites);
	// 	}
	// };

	// useEffect(() => {
	// 	getCars().then((data) => {
	// 		setCars(data);
	// 	});
	// }, []);

	return (
		<List>
			{cars.map((car) => (
				<CarCard
					key={car.id}
					car={car}
					cars={cars}
					favorites={favorites}
					setFavorites={setFavorites}
				/>
			))}
		</List>
	);
};

CarList.propTypes = {};

export default CarList;
