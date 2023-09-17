import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { getCars, getPaginatedCars } from "../shared/api/cars-api";
import Container from "../components/Container/Container";
import Filter from "../components/Filter/Filter";
import CarList from "../components/CarList/CarList";
import Loader from "../components/Loader/Loader";
import { LoadMoreButton } from "../components/Buttons/Buttons.styled";
import { CarListContainer } from "../components/CarList/CarList.styled";


const CatalogPage = ({ favorites, setFavorites }) => {
	const [cars, setCars] = useState([]);
	const [paginatedCars, setPaginatedCars] = useState([]);
	const [page, setPage] = useState(1);

	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const carListRef = useRef(null);
	const dummyRef = useRef(null);

	useEffect(() => {
		setIsLoading(true);
		getCars()
			.then((data) => {
				setCars(data);
			})
			.finally(() => setIsLoading(false));
	}, []);

	useEffect(() => {
		setIsLoadingMore(true);
		getPaginatedCars(page)
			.then((data) => {
				setPaginatedCars((prevState) => [...prevState, ...data]);
			})
			.finally(() => {
				setIsLoadingMore(false);

				if (dummyRef.current) {
					dummyRef.current.scrollIntoView({
						behavior: "smooth",
					});
				}
			});
	}, [page]);

	const loadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<Container>
			{isLoading ? (
				<div>
					<Loader />
				</div>
			) : (
				<>
					<Filter />
					{cars?.length > 0 ? (
						<CarListContainer ref={carListRef}>
							<CarList
								cars={paginatedCars}
								favorites={favorites}
								setFavorites={setFavorites}
							/>
							<div ref={dummyRef}></div>

							{isLoadingMore && (
								<div>
									<Loader />
								</div>
							)}
						</CarListContainer>
					) : (
						<h2>Unfortunately, we couldn't find any cars</h2>
					)}

					{cars.length > paginatedCars.length && (
						<LoadMoreButton type="button" onClick={loadMore}>
							Load more
						</LoadMoreButton>
					)}
				</>
			)}
		</Container>
	);
};

CatalogPage.propTypes = {
	favorites: PropTypes.array.isRequired,
	setFavorites: PropTypes.func.isRequired,
};

export default CatalogPage;
