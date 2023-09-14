

export const getCars = () => {
	return fetch(`https://65032a90a0f2c1f3faeb9076.mockapi.io/cars`).then(
		(res) => res.json()
	);
};
