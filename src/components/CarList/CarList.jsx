import PropTypes from "prop-types";
import CarCard from "../CarCard/CarCard";
import { List } from "./CarList.styled";

const CarList = ({ cars, favorites, setFavorites }) => {
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

CarList.propTypes = {
	cars: PropTypes.array.isRequired,
	favorites: PropTypes.array.isRequired,
	setFavorites: PropTypes.func.isRequired,
};

export default CarList;
