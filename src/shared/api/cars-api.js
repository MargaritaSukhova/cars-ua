import axios from "axios";

axios.defaults.baseURL = "https://65032a90a0f2c1f3faeb9076.mockapi.io";

export const getCars = async () => {
	try {
		const { data } = await axios.get("/cars");
		return data;
	} catch (err) {
		console.log(err.response.data.message);
		return err.response.data.message;
	}
};
