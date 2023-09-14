import { useEffect, useState } from "react";
import { getCars } from "../../shared/api/cars-api";
import PropTypes from "prop-types";
import CarCard from "../CarCard/CarCard";
import {List} from "./CarList.styled"

const CarList = () => {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		getCars().then((data) => {
			console.log(data);
			setCars(data);
		});
	}, []);

	console.log(cars);

	return (
		<List>
			{cars.length > 0 &&
				cars.map(
					({
						id,
						make,
						model,
						year,
						rentalPrice,
						address,
						rentalCompany,
						functionalities,
						type,
						img,
					}) => (
						<CarCard
							key={id}
							id={id}
							make={make}
							model={model}
							year={year}
							rentalPrice={rentalPrice}
							address={address}
							rentalCompany={rentalCompany}
							functionalities={functionalities}
							type={type}
							img={img}
						/>
					)
				)}
		</List>
	);
};

CarList.propTypes = {};

export default CarList;
