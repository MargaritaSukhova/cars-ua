import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Notify } from "notiflix/build/notiflix-notify-aio";
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

const Filter = ({ setFilter, filteredCars }) => {
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

	const { register, handleSubmit, control, reset } = useForm({});

	const getValue = (value, options) => {
		value ? options.find((option) => option.value === value) : "";
	};

	const onSubmit = (data) => {
		
		const { make, price, from, to } = data;
		if (from === "" && to === "" && make === undefined && price === undefined) {
			Notify.failure("Please choose a parameter to filter cars");
			return;
		}
		const fromNumber = parseInt(from.replace(/,/g, ""), 10);
		const toNumber = parseInt(to.replace(/,/g, ""), 10);

		if (fromNumber > toNumber && toNumber !== "") {
			Notify.failure("Mileage is incorrect!");
			return;
		}

		setFilter(data);
	};

	useEffect(() => {
		if (filteredCars.length === 0) {
			reset({ make: "", price: "", from: "", to: "" });
		}
	}, [filteredCars, reset]);

	return (
		<FilterForm onSubmit={handleSubmit(onSubmit)}>
			<Label htmlFor="model">
				Car brand
				<Controller
					control={control}
					name="make"
					render={({ field: { onChange, value } }) => (
						<ModelSelect
							options={makesOptions}
							value={getValue(value, makesOptions)}
							onChange={(newValue) => onChange(newValue.label)}
							classNamePrefix={"select"}
							placeholder="Enter the text"
						/>
					)}
				/>
			</Label>
			<Label htmlFor="price">
				Price/ 1 hour
				<Controller
					control={control}
					name="price"
					render={({ field: { onChange, value } }) => (
						<PriceSelect
							options={priceOptions}
							value={getValue(value, priceOptions)}
							onChange={(newValue) => onChange(newValue.label)}
							classNamePrefix={"select"}
							placeholder="To $"
						/>
					)}
				/>
			</Label>
			<Fieldset>
				<legend>Сar mileage / km</legend>
				<InputFrom
					id="from"
					{...register("from")}
					placeholder="From "
					value={inputNumberFrom}
					onChange={handleChangeFrom}
				/>
				<InputTo
					id="to"
					{...register("to")}
					placeholder="To"
					value={inputNumberTo}
					onChange={handleChangeTo}
				/>
			</Fieldset>
			<SearchButton type="submit">Search</SearchButton>
		</FilterForm>
	);
};

Filter.propTypes = {
	setFilter: PropTypes.func.isRequired,
	filteredCars: PropTypes.array.isRequired,
};

export default Filter;
