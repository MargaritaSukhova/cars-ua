import styled from "@emotion/styled";
import Select from "react-select";

export const FilterForm = styled.form`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	gap: 18px;
	margin-bottom: 50px;
`;

export const Label = styled.label`
	color: #8a8a89;
	font-family: Manrope;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px;
`;

const StyledSelect = styled(Select)`
	.select__control {
		margin-top: 8px;
		cursor: pointer;
		padding: 14px 18px;
		display: flex;
		justify-content: center;
		align-items: center;
		// width: 224px;
		border: 0;
		border-radius: 14px;
		background-color: #f7f7fb;
		// position: relative;
		:hover {
			html,
			body {
				overflow: hidden;
			}
		}
		:focus {
			html,
			body {
				overflow: hidden;
			}
		}
	}

	.select__control--is-focused {
		outline: 0;
	}

	.select__menu {
		background-color: #ffffff;
		border-radius: 14px;
		outline: 0;
		padding: 8px;
		border: 1px solid rgba(18, 20, 23, 0.05);
		// margin-top: -5px;
	}

	.select__menu:hover {
		outline: 0;
	}

	.select__menu-list {
		max-height: 272px;
		scrollbar-width: 8px;
		overflow-x: hidden;
	}

	.select__value-container {
		padding: 0;
		text-align: left;
		line-height: 20px;
		font-family: Manrope;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
	}

	.select__indicator-separator {
		display: none;
	}

	.select__input-container {
		margin: 0;
		padding: 0;
		color: #121417;
		font-family: Manrope;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
	}

	.select__placeholder {
		color: #121417;
		font-family: Manrope;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
	}

	.select__option {
		color: rgba(18, 20, 23, 0.2);
		font-family: Manrope;
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
		background-color: transparent;
		:hover {
			color: #121417;
		}
		:focus {
			color: #121417;
		}
	}

	.select__indicator {
		padding: 0;
		svg {
			fill: #121417;
			transition: transform 300ms ease;
			:hover {
				transform: rotate(180deg);
			}
			:focus {
				transform: rotate(180deg);
			}
			:active {
				transform: rotate(180deg);
			}
		}
	}

	.select__single-value {
		margin: 0;
	}

	.select__input {
		padding: 0;
	}
`;

export const ModelSelect = styled(StyledSelect)`
	.select__control {
		width: 224px;
	}
`;

export const PriceSelect = styled(StyledSelect)`
	.select__control {
		width: 125px;
	}
`;

export const Fieldset = styled.fieldset`
	border: 0;
	padding: 0;
	margin: 0;

	legend {
		padding: 0;
		margin-bottom: 8px;
		color: #8a8a89;
		font-family: Manrope;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 18px;
	}
`;

export const InputFrom = styled.input`
	width: 160px;
	height: 48px;
	padding: 14px 24px;
	border: 0;
	border-radius: 14px 0px 0px 14px;
	border-right: 1px solid rgba(138, 138, 137, 0.2);
	background: #f7f7fb;
	color: #121417;
	font-family: Manrope;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 20px;
	::placeholder {
		color: #121417;
		font-family: Manrope;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px;
	}
`;

export const InputTo = styled(InputFrom)`
	border: 0;
	border-radius: 0px 14px 14px 0px;
`;
