import { useEffect } from "react";
import { createPortal } from "react-dom";
import { RentalCarButton } from "../Buttons/Buttons.styled";
import { ReactComponent as X } from "../../assets/icons/x.svg";

import {
	ModalContainer,
	Backdrop,
	CloseButton,
	CarImg,
	// InfoWrapper,
	TitleContainer,
	Title,
	TitleAccent,
	// CarInfo,
	// CarText,
	// ModelBlue,
	SecondaryInfo,
	SecondaryCarText,
	// Accessories,
	SecondaryTitle,
	Descriprion,
	AccessoryList,
	// AccessoryListItem,
	// RentalTitle,
	RentalItem,
	RentalInfo,
	// RentalBlock,
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const toggleBodyOverflow = (toggle) => {
	if (toggle) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}
};

const Modal = ({
	onClose,
	car: {
		model,
		make,
		id,
		img,
		year,
		address,
		rentalPrice,
		type,
		functionalities,
		fuelConsumption,
		engineSize,
		description,
		accessories,
		rentalConditions,
		mileage,
	},
}) => {
	useEffect(() => {
		toggleBodyOverflow(true);
		const onKeyDown = (event) => {
			if (event.code === "Escape") {
				onClose();
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => {
			toggleBodyOverflow(false);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [onClose]);

	const onOverlay = (event) => {
		if (event.currentTarget === event.target) {
			onClose();
		}
	};

	const city = address.split(",")[1];
	const country = address.split(",")[2];
	const rentalConditionsSplitted = rentalConditions.split("\n", 3);
	const firstElement = rentalConditionsSplitted[0];
	const match = firstElement.match(/\d+/);
	const number = parseInt(match[0], 10);

	const handleCallButtonClick = () => {
		const phoneNumber = "+380730000000";
		const telUri = `tel:${phoneNumber}`;
		window.location.href = telUri;
	};

	return createPortal(
		<Backdrop onClick={onOverlay} className="show">
			<ModalContainer className="show">
				<CloseButton type="button" aria-label="close button" onClick={onClose}>
					<X style={{ width: 24, height: 24 }} />
				</CloseButton>

				<CarImg src={img} alt={description} />
				{/* <InfoWrapper> */}
				<TitleContainer>
					<Title>
						{make}
						<TitleAccent> {model}</TitleAccent>, {year}
					</Title>
				</TitleContainer>
				<SecondaryInfo>
					<SecondaryCarText>{city}</SecondaryCarText>
					<SecondaryCarText>{country}</SecondaryCarText>
					<SecondaryCarText>id: {id}</SecondaryCarText>
					<SecondaryCarText>Year: {year}</SecondaryCarText>
					<SecondaryCarText>Type: {type}</SecondaryCarText>
					<SecondaryCarText>
						Fuel Consumption: {fuelConsumption}
					</SecondaryCarText>
					<SecondaryCarText>Engine Size: {engineSize}</SecondaryCarText>
				</SecondaryInfo>
				<Descriprion>{description}</Descriprion>
				{/* <Accessories> */}
				<SecondaryTitle>Accessories and functionalities:</SecondaryTitle>
				<AccessoryList>
					{accessories.map((accessory, index) => (
						<SecondaryCarText key={index}>{accessory}</SecondaryCarText>
					))}
					{functionalities.map((functionality, index) => (
						<SecondaryCarText key={index}>{functionality}</SecondaryCarText>
					))}
				</AccessoryList>
				{/* </Accessories> */}
				{/* <RentalBlock> */}
				<SecondaryTitle>Rental Conditions:</SecondaryTitle>
				<RentalInfo>
					<RentalItem>
						Minimum age: <span>{number}</span>
					</RentalItem>
					<RentalItem>{rentalConditionsSplitted[1]}</RentalItem>
					<RentalItem>{rentalConditionsSplitted[2]}</RentalItem>
					<RentalItem>
						Mileage: <span>{mileage.toLocaleString("en-EN")}</span>
					</RentalItem>
					<RentalItem>
						Price: <span>{rentalPrice}</span>
					</RentalItem>
				</RentalInfo>
				<RentalCarButton type="button" onClick={handleCallButtonClick}>
					Rental car
				</RentalCarButton>
				{/* </RentalBlock> */}
				{/* <RentalBtn /> */}
				{/* </InfoWrapper> */}
			</ModalContainer>
		</Backdrop>,
		modalRoot
	);
};

export default Modal;
