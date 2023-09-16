import styled from "@emotion/styled";

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(18, 20, 23, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #ffffff;
	border-radius: 24px;
	padding: 40px;
	max-width: 541px;
	z-index: 200;
	overflow-y: auto;
	max-height: 752px;
  height: 95vh;
	border-radius: 24px;
`;

export const CloseButton = styled.button`
	position: absolute;
	color: black;
	top: 16px;
	right: 16px;
	background-color: transparent;
	border: none;
	padding: 0;
`;

export const CarImg = styled.img`
	display: block;
	width: 100%;
	max-width: 100%;
	width: 461px;
	height: 248px;
	object-fit: cover;
	border-radius: 14px;
  margin-bottom: 14px;
`;

// export const InfoWrapper = styled.div`
// 	width: 100%;
// 	align-items: center;
// `;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 8px;
`;

export const Title = styled.h3`
	color: #121417;
	font-family: Manrope;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
`;

export const TitleAccent = styled.span`
	color: #3470ff;

`;


// export const ModelBlue = styled.div`
// 	color: #3470ff;
// 	font-size: 16px;
// `;

export const SecondaryInfo = styled.ul`
	display: flex;
	width: 300px;
	flex-wrap: wrap;
	align-items: center;
	color: rgba(18, 20, 23, 0.5);
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	column-gap: 6px;
	row-gap: 4px;
	margin-bottom: 14px;
`;

export const SecondaryCarText = styled.li`
	border-right: 1px solid rgba(18, 20, 23, 0.2);
	padding-right: 6px;
`;

export const Descriprion = styled.p`
	color: #121417;
	font-family: Manrope;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
  margin-bottom: 24px
`;

// export const Accessories = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	margin-bottom: 24px;
// `;

export const SecondaryTitle = styled.h4`
	color: #121417;
	font-family: Manrope;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
	margin-bottom: 8px;
`;

export const AccessoryList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	color: rgba(18, 20, 23, 0.5);
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	column-gap: 6px;
	row-gap: 4px;
	margin-bottom: 24px;
`;

// export const AccessoryListItem = styled.li`
// 	color: rgba(18, 20, 23, 0.5);
// 	font-size: 12px;
// 	font-weight: 400;
// 	line-height: 18px;
// 	border-right: 1px solid rgba(18, 20, 23, 0.2);
// 	padding-right: 3px;
// `;

// export const RentalBlock = styled.div`
// 	padding: 0;
// 	margin: 0;
// `;

// export const RentalTitle = styled.p`
// 	margin-bottom: 8px;
// 	color: #121417;
// 	font-size: 14px;
// 	font-weight: 500;
// 	line-height: 1.43;
// `;

export const RentalInfo = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 24px;
`;

export const RentalItem = styled.li`
	padding: 7px 14px;
	border-radius: 35px;
	background: #f9f9f9;
	color: #363535;
	font-size: 12px;
	font-weight: 400;
	line-height: 1.5;

	& span {
		color: #3470ff;
		font-family: Montserrat;
		font-size: 12px;
		font-weight: 600;
		line-height: 1.5;
		letter-spacing: -0.24px;
	}
`;
