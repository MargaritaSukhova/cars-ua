import PropTypes from "prop-types";
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

const CarCard = ({
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
	const city = address.split(",")[1];
	const country = address.split(",")[2];
	const functionality = functionalities[0];

	return (
		<Item key={id}>
			<Img src={img} />
			<TitleContainer>
				<Title>
					{make}
					{model.length < 9 ? <TitleAccent> {model}, </TitleAccent> : <span>, </span>}
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
		</Item>
	);
};

CarCard.propTypes = {};

export default CarCard;
