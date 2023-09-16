import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

axios.defaults.baseURL = "https://65032a90a0f2c1f3faeb9076.mockapi.io";

export const getCars = async () => {
	try {
		const { data } = await axios.get("/cars");
		return data;
	} catch (err) {
		Notify.failure(err.response.statusText);
		return err;
	}
};

export const getPaginatedCars = async (page) => {
	try {
		const { data } = await axios.get(`/cars`, {
			params: {
				page: page,
				limit: 8,
			},
		});
		return data;
	} catch (err) {
		Notify.failure(err.response.statusText);
		return err;
	}
};

export const getMakes = async () => {
	try {
		const { data } = await axios.get("/makes");
		return data;
	} catch (err) {
		Notify.failure(err.response.statusText);
		return err;
	}
};
