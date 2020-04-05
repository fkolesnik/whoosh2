import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Box, boxExtra, Button } from "../styles/Styles";
import theme from "../styles/theme";
import countries from "../data/countries";
import Select from "react-select";
import validateInput from "../utils/validateInput";
//import validateInput from "../utils/validateInput";

const fields = [
  {
    name: "email",
    placeholder: "Электронная почта",
    type: "email",
    width: 1,
  },
  { name: "name", placeholder: "Имя", type: "text", width: 1 },
  {
    name: "city",
    placeholder: "Город",
    type: "text",
    width: [7 / 10, 3 / 4],
  },
  {
    name: "zip",
    placeholder: "Индекс",
    type: "text",
    width: [3 / 10, 1 / 4],
  },
  {
    name: "address",
    placeholder: "Адрес",
    type: "text",
    width: 1,
  },
  {
    name: "country",
    placeholder: "Страна",
    width: 1,
    select: true,
  },
];

const INITIAL_VALUES = {
  email: "",
  name: "",
  address: "",
  city: "",
  zip: "",
  country: "",
};

const CartForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [error, setError] = useState("");
  console.log("error in body:", error);

  const onChange = (e) => {
    e.persist();
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const onSelectChange = (country) => {
    if (country) {
      setValues((prevValues) => ({
        ...prevValues,
        country: country.label,
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        country: "",
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(validateInput(values));

    if (error.length > 0) {
      console.log("error in submit", error);
    } else {
      console.log("error in submit 2", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Wrap>
        {fields.map((field) => (
          <Fragment key={field.name}>
            {field.select ? (
              <SelectWrap width={field.width}>
                <Select
                  classNamePrefix="country-container"
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  options={countries}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={(country) => onSelectChange(country)}
                  menuPlacement="top"
                  noOptionsMessage={() => "Увы, в такую страну доставки нет"}
                  isClearable
                  className="country-container"
                />
              </SelectWrap>
            ) : (
              <Input
                name={field.name}
                width={field.width}
                placeholder={field.placeholder}
                type={field.type}
                value={values[field.name]}
                onChange={onChange}
                maxLength={100}
              />
            )}
          </Fragment>
        ))}
      </Wrap>
      <Box
        height={30}
        fontSize="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="red"
      >
        {error}
      </Box>
      <Box>
        <Button width={1} type="submit">
          Оплатить
        </Button>
      </Box>
    </form>
  );
};

export default CartForm;

const Wrap = styled.div`
  border-radius: 6px;
  background-color: white;
  box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 2px 0 rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.75rem;
  border: none;
  border-bottom: 1px solid ${theme.color.light};
  transition: all 0.2s;
  background-color: transparent;
  &:first-child {
    border-radius: 6px 6px 0 0;
  }
  &[name="zip"] {
    border-left: 1px solid ${theme.color.light};
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #9bcaff;
  }
  ${boxExtra}
`;

const SelectWrap = styled.div`
  display: inline-block;
  .country-container {
    padding-bottom: 1px;
    .country-container__control {
      background-color: transparent;
      border: none;
      box-shadow: none;
      padding-left: 0.25rem;
      &:hover {
        border: none;
      }
    }
    .country-container__menu-list {
      height: 220px;
    }
    .country-container__indicator {
      color: #9b9b9b;
    }
  }
  ${boxExtra}
`;
