const createArrayWithStep = (min, number, step) => {
	const resultArray = [];
	for (let i = min; i <= number; i += step) {
		resultArray.push(i);
	}
	return resultArray;
};

export default createArrayWithStep;