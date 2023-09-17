import styled from "@emotion/styled";
import background from "../../assets/images/background.jpg";

export const ContainerStyled = styled.main`
	width: 1440px;
	margin: 0 auto;
	padding: 100px 128px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const HomeContainer = styled.main`
  background-image: url(${background});
	background-repeat: no-repeat;
	background-size: cover;
	width: 1440px;
	margin: 0 auto;
	padding: 60px 128px;
	height: calc(100vh - 80px);
`;
