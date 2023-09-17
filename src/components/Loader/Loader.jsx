import { RotatingLines } from "react-loader-spinner";
import Container from "../Container/Container";

const Loader = () => {
	return (
		<Container>
			<RotatingLines
				strokeColor="#3470FF"
				strokeWidth="5"
				animationDuration="0.75"
				width="96"
				visible={true}
			/>
			;
		</Container>
	);
};

export default Loader;
