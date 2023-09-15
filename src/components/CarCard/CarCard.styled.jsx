import styled from "@emotion/styled";

export const Item = styled.li`
	width: 274px;
	position: relative;
`;

export const Img = styled.img`
	width: 274px;
	height: 268px;
	object-fit: cover;
	border-radius: 14px;
	margin-bottom: 14px;
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
`;

export const Title = styled.h3`
	font-family: Manrope;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	color: #121417;
`;

export const TitleAccent = styled.span`
	color: #3470ff;
`;

export const InfoContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	column-gap: 6px;
	row-gap: 4px;
	height: 40px;
	width: 270px;
	align-content: flex-start;
	margin-bottom: 28px;
`;

export const InfoText = styled.p`
	color: rgba(18, 20, 23, 0.5);
	font-family: Manrope;
	font-size: 12px;
	line-height: 18px;
	border-right: 1px solid rgba(18, 20, 23, 0.1);
	padding-right: 6px;
`;

export const InfoTextLast = styled.p`
	display: inline;
	color: rgba(18, 20, 23, 0.5);
	font-family: Manrope;
	font-size: 12px;
	line-height: 18px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 27%;
`;
