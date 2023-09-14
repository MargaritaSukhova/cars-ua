import { useEffect, useState } from "react";
import { getCars } from "../shared/api/cars-api";
import CarList from "../components/CarList/CarList";

const CatalogPage = () => {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		getCars().then((res) => {
			console.log(res);
			setCars(res);
		});
	}, []);

	return (
		<div>
			CatalogPage
			<CarList cars={cars} />
		</div>
	);
};

export default CatalogPage;
