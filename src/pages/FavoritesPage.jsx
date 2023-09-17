import { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import PropTypes from "prop-types";
import Container from "../components/Container/Container";
import Filter from "../components/Filter/Filter";
import CarList from "../components/CarList/CarList";

const FavoritesPage = ({ favorites, setFavorites }) => {
	const [filter, setFilter] = useState({});

	let filteredCars = favorites;

	const isFilered = JSON.stringify(filter) !== "{}";

	if (isFilered) {
		const { make = "", price = "", from, to } = filter;

		if (make !== "") {
			filteredCars = filteredCars.filter((car) => car.make === make);
		}

		if (price !== "") {
			filteredCars = filteredCars
				.filter((car) => Number(car.rentalPrice.substr(1)) <= Number(price))
				.sort(
					(firstCar, secondCar) =>
						Number(firstCar.rentalPrice.substr(1)) -
						Number(secondCar.rentalPrice.substr(1))
				);
		}

		if (from !== "") {
			const fromNumber = parseInt(from.replace(/,/g, ""), 10);
			filteredCars = filteredCars.filter(
				(car) => parseInt(car.mileage, 10) >= fromNumber
			);
		}

		if (to !== "") {
			const toNumber = parseInt(to.replace(/,/g, ""), 10);
			filteredCars = filteredCars.filter(
				(car) => parseInt(car.mileage, 10) <= toNumber
			);
		}

		if (filteredCars.length === 0) {
			Notify.failure("Sorry, there are no cars matching your criteria.");
		}
	}

	return (
		<Container>
			<Filter setFilter={setFilter} filteredCars={filteredCars} />
			{favorites?.length > 0 ? (
				<CarList
					cars={
						isFilered && filteredCars.length !== 0 ? filteredCars : favorites
					}
					// cars={favorites}
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

export default FavoritesPage;
