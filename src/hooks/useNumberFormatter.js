import { useState } from "react";

const  useNumberFormatter = (initialValue = "") => {
	const [inputNumber, setInputNumber] = useState(initialValue);

	const handleChange = (e) => {
		const rawValue = e.target.value;

		const number = parseFloat(rawValue.replace(/[^0-9.]/g, ""));

		if (!isNaN(number)) {
			setInputNumber(number.toLocaleString("en-US"));
		} else {
			setInputNumber("");
		}
	};

	return { inputNumber, onChange: handleChange };
}

export default useNumberFormatter;
