import { HomeContainer } from "../components/Container/Container.styled";
import Services from "../components/Services/Services";
import { HomeTitle } from "../components/Title/Title.styled";
import { BookButton } from "../components/Buttons/Buttons.styled";
import { NavLink } from "react-router-dom";

const HomePage = () => {
	return (
		<HomeContainer>
			<HomeTitle>Cars UA – Search, Compare & Save</HomeTitle>
			<Services />
			<NavLink to="/catalog">
				<BookButton type="button">Book now</BookButton>
			</NavLink>
		</HomeContainer>
	);
};

export default HomePage;
