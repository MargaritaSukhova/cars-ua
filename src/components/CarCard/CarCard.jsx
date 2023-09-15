import PropTypes from "prop-types";
import { LearnMoreButton, FavoritesButton } from "../Buttons/Buttons";
import {
	Item,
	Img,
	TitleContainer,
	Title,
	TitleAccent,
	InfoContainer,
	InfoText,
	InfoTextLast,
} from "./CarCard.styled";

const CarCard = ({ car, cars, favorites, setFavorites }) => {
	const {
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
		description,
	} = car;
	const city = address.split(",")[1];
	const country = address.split(",")[2];
	const functionality = functionalities[0];

	return (
		<Item key={id}>
			<Img src={img} alt={description} />
			<TitleContainer>
				<Title>
					{make}
					{model.length < 9 ? (
						<TitleAccent> {model}, </TitleAccent>
					) : (
						<span>, </span>
					)}
					{year}
				</Title>
				<Title>{rentalPrice}</Title>
			</TitleContainer>
			<InfoContainer>
				<InfoText>{city}</InfoText>
				<InfoText>{country}</InfoText>
				<InfoText>{rentalCompany}</InfoText>
				<InfoText>{type}</InfoText>
				<InfoText>{model}</InfoText>
				<InfoText>{id}</InfoText>
				<InfoTextLast>{functionality}</InfoTextLast>
			</InfoContainer>
			<LearnMoreButton />
			<FavoritesButton
				id={id}
				cars={cars}
				favorites={favorites}
				setFavorites={setFavorites}
			/>
		</Item>
	);
};

CarCard.propTypes = {};

export default CarCard;
