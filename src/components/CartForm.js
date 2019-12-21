import React, {Fragment} from "react";
import styled from "styled-components";
import {Box, boxExtra, Button} from "../styles/Styles";
import theme from "../styles/theme";
import countries from "../data/countries";

const fields = [
    {name: "name", placeholder: "Имя", type: "text", width: [1, 1 / 2]},
    {name: "email", placeholder: "Почта", type: "email", width: [1, 1 / 2]},
    {name: "country", placeholder: "Страна", width: [1, 1 / 2], select: true},
    {name: "city", placeholder: "Город", type: "text", width: [1, 1 / 2]},
    {
        name: "address",
        placeholder: "Адрес",
        type: "text",
        width: [7 / 10, 3 / 4]
    },
    {name: "zip", placeholder: "Индекс", type: "text", width: [3 / 10, 1 / 4]}
];

const INITIAL_VALUES = {
    email: "",
    name: "",
    address: "",
    city: "",
    zip: "",
    country: ""
};

const CountrySelect = ({field, onChange}) => (
    <Select
        as="select"
        defaultValue="0"
        onChange={onChange}
        name={field.name}
        width={field.width}
        required
    >
        <option value="0" disabled hidden>
            {field.placeholder}
        </option>
        {countries.map(country => (
            <option value={country.name} key={country.code}>
                {country.name}
            </option>
        ))}
    </Select>
);

const CartForm = () => {
    const [values, setValues] = React.useState(INITIAL_VALUES);

    const onChange = e => {
        e.persist();
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const onChangeSelect = value => {
        console.log("value", value);
        /* setValues(prevValues => ({
               ...prevValues,
               [e.target.name]: e.target.value
             }));*/
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log("submit: ", values);
    };

    return (
        <Box as="form" onSubmit={onSubmit}>
            {fields.map(field => (
                <Fragment key={field.name}>
                    {field.select ? (
                            <CountrySelect
                                field={field}
                                onChange={onChange}
                                key="select"
                            />

                    ) : (
                        <Input
                            name={field.name}
                            width={field.width}
                            placeholder={field.placeholder}
                            type={field.type}
                            value={values[field.name]}
                            onChange={onChange}
                            required
                        />
                    )}
                </Fragment>
            ))}

            <Box mt={4}>
                <Button width={1} type="submit">
                    Оплатить
                </Button>
            </Box>
        </Box>
    );
};

export default CartForm;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.75rem 0.5rem;
  border: 3px solid ${theme.color.light};
  border-radius: 6px;
  transition: all 0.2s;
  &:focus {
    outline: none;
    border-color: #d2e8ff;
  }
  ${boxExtra}
`;

const Select = styled(Input)`
  font-size: inherit;
  line-height: 1;
  box-sizing: border-box;
  background-color: white;
  outline: none;
  box-shadow: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: none;
  ::-ms-expand {
    display: none;
  }
`;
