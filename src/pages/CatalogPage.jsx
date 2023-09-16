import Container from "../components/Container/Container";
import Filter from "../components/Filter/Filter";
import CarList from "../components/CarList/CarList";
import { useEffect, useRef, useState } from "react";
import { getCars, getPaginatedCars } from "../shared/api/cars-api";
import { LoadMoreButton } from "../components/Buttons/Buttons.styled";
import Loader from "../components/Loader/Loader"

const CatalogPage = ({ favorites, setFavorites }) => {
	const [cars, setCars] = useState([]);
	const [paginatedCars, setPaginatedCars] = useState([]);
	const [page, setPage] = useState(1);
	const isFirstRender = useRef(true)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true);
		getCars()
			.then((data) => {
				setCars(data);
			})
			.finally(setIsLoading(false));
	}, []);

	useEffect(() => {
		// if (isFirstRender.current) {
		// 	isFirstRender.current = false;
		// 	return;
		// }
		setIsLoading(true);
			getPaginatedCars(page)
				.then((data) => {
					setPaginatedCars((prevState) => [...prevState, ...data]);
				})
				.finally(setIsLoading(false));
	}, [page]);

	const loadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<Container>
			{isLoading && <Loader/>}
			<h2>CatalogPage </h2>
			<Filter />
			{cars?.length > 0 ? (
				<CarList
					cars={paginatedCars}
					favorites={favorites}
					setFavorites={setFavorites}
				/>
			) : (
				<h2>Unfortunately, we couldn't find any cars</h2>
			)}

			{cars.length > paginatedCars.length && (
				<LoadMoreButton type="button" onClick={loadMore}>
					Load more
				</LoadMoreButton>
			)}
		</Container>
	);
};

export default CatalogPage;
