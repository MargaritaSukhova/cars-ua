// import React from "react";
// import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import Select from "react-select";
import { getMakes } from "../../shared/api/cars-api";
import { SearchButton } from "../Buttons/Buttons.styled";
import useNumberFormatter from "../../hooks/useNumberFormatter";
import createArrayWithStep from "../../helpers/createArrayWithStep";
import {
	FilterForm,
	Label,
	ModelSelect,
	PriceSelect,
	Fieldset,
	InputFrom,
	InputTo,
} from "./Filter.styled";

const Filter = () => {
	const [makes, setMakes] = useState([]);

	useEffect(() => {
		getMakes().then((data) => {
			setMakes(data);
		});
	}, []);

	const makesOptions = makes.map((make) => ({
		value: make,
		label: make,
	}));

	const minPrice = 20;
	const maxPrice = 500;
	const step = 10;
	const priceOptions = createArrayWithStep(minPrice, maxPrice, step).map(
		(item) => ({ label: item, value: item })
	);

	const { inputNumber: inputNumberFrom, onChange: handleChangeFrom } =
		useNumberFormatter();
	const { inputNumber: inputNumberTo, onChange: handleChangeTo } =
		useNumberFormatter();

	return (
		<div>
			<FilterForm>
				<Label htmlFor="model">
					Car brand
					<ModelSelect
						options={makesOptions}
						name="model"
						placeholder="Enter the text"
						classNamePrefix="select"
					/>
				</Label>
				<Label htmlFor="price">
					Price/ 1 hour
					<PriceSelect
						options={priceOptions}
						name="price"
						placeholder="To $"
						classNamePrefix="select"
					/>
				</Label>
				<Fieldset>
					<legend>Сar mileage / km</legend>
					<label htmlFor="from"></label>
					<InputFrom
						id="from"
						name="from"
						placeholder="From "
						value={inputNumberFrom}
						onChange={handleChangeFrom}
					/>
					<label htmlFor="to"></label>
					<InputTo
						id="to"
						name="to"
						placeholder="To"
						value={inputNumberTo}
						onChange={handleChangeTo}
					/>
				</Fieldset>
				<SearchButton type="submit">Search</SearchButton>
			</FilterForm>
		</div>
	);
};

Filter.propTypes = {};

export default Filter;
