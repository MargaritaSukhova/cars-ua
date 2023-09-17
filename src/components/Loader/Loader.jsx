import { RotatingLines } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
	return (
		<LoaderContainer>
			<RotatingLines
				strokeColor="#3470FF"
				strokeWidth="5"
				animationDuration="0.75"
				width="96"
				visible={true}
			/>
			;
		</LoaderContainer>
	);
};

export default Loader;
