import PropTypes from "prop-types";
import { FavoritesButton } from "../Buttons/Buttons";
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
import { useState } from "react";
import { LearnMoreButton } from "../Buttons/Buttons.styled";
import Modal from "../Modal/Modal";

const CarCard = ({ car, cars, favorites, setFavorites }) => {
	const {
		model,
		make,
		id,
		img,
		year,
		address,
		rentalPrice,
		rentalCompany,
		type,
		functionalities,
		description,
	} = car;

	const city = address.split(",")[1];
	const country = address.split(",")[2];
	const functionality = functionalities[0];

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Item key={id}>
				<Img src={img} alt={description} />
				<TitleContainer>
					<Title>
						{make}
						{model.length < 9 ? (
							<TitleAccent>
								{" "}
								{model}
								<span style={{ color: "black" }}>,</span>{" "}
							</TitleAccent>
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
				<LearnMoreButton type="button" onClick={openModal}>
					Lear more
				</LearnMoreButton>
				<FavoritesButton
					id={id}
					cars={cars}
					favorites={favorites}
					setFavorites={setFavorites}
				/>
			</Item>
			{isModalOpen && <Modal onClose={closeModal} car={car} />}
		</>
	);
};

CarCard.propTypes = {
	car: PropTypes.shape({}).isRequired,
	cars: PropTypes.array.isRequired,
	favorites: PropTypes.array.isRequired,
	setFavorites: PropTypes.func.isRequired,
};

export default CarCard;
