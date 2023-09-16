import { useState } from "react";

const  useNumberFormatter = (initialValue = "") => {
	const [inputNumber, setInputNumber] = useState(initialValue);

	const handleChange = (e) => {
		const rawValue = e.target.value;

		// Remove non-numeric characters and parse as a float
		const number = parseFloat(rawValue.replace(/[^0-9.]/g, ""));

		if (!isNaN(number)) {
			// Format the number with commas as thousands separators
			setInputNumber(number.toLocaleString("en-US"));
		} else {
			setInputNumber("");
		}
	};

	// Expose the state and handler for external use
	return { inputNumber, onChange: handleChange };
}

export default useNumberFormatter;
