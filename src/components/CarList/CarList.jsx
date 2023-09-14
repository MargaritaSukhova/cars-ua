
import PropTypes from "prop-types";


const CarList = (cars) => {


  console.log(cars);

	return (
		<ul>
			{cars.map(
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
				}) => {
					<li key={id}>
						<img src={img} />
						<h3>
							{make}
							<span>{model}</span>
							{year}
						</h3>
					</li>;
				}
			)}
		</ul>
	);
};

CarList.propTypes = {};

export default CarList;
