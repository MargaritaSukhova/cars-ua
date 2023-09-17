import Calendar from "../../assets/images/calendar.png"
import Magnifier from "../../assets/images/magnifier.png"
import Wallet from "../../assets/images/wallet.png";
import Clean from "../../assets/images/clean.png";
import { List, Item, Title, TextContainer, Text } from "./Services.styled";

const Services = ()  => {
  return (
		<List>
			<Item>
				<img src={Calendar} alt="Calendar" width="70" />
				<TextContainer>
					<Title>Flexible rentals</Title>
					<Text>
						Cancel or change most bookings for free up to 48 hours before
						pick-up
					</Text>
				</TextContainer>
			</Item>
			<Item>
				<img src={Magnifier} alt="Magnifier" width="70" />
				<TextContainer>
					<Title>No hidden fees</Title>
					<Text>Know exactly what you’re paying</Text>
				</TextContainer>
			</Item>
			<Item>
				<img src={Wallet} alt="Wallet" width="70" />
				<TextContainer>
					<Title>Price Match Guarantee</Title>
					<Text>Found the same deal for less? We’ll match the price</Text>
				</TextContainer>
			</Item>
			<Item>
				<img src={Clean} alt="Clean" width="70" />
				<TextContainer>
					<Title>Clean cars. Socially distant rental counters.</Title>
					<Text>
						We’re working with our partners to keep you safe and in the driving
						seat
					</Text>
				</TextContainer>
			</Item>
		</List>
	);
}


export default Services