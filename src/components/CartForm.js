import React from "react";
import styled from "styled-components";
import {Box, boxExtra, Button} from "../styles/Styles";
import theme from "../styles/theme";

const INITIAL_VALUES = {
    email: "",
    name: "",
    address: "",
    city: "",
    zip: "",
    country: ""
};

const CartForm = () => {
    const [values, setValues] = React.useState(INITIAL_VALUES);

    const onChange = e => {
        e.persist();
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log("submit: ", values);
    };

    return (
        <Box
            as="form"

            onSubmit={onSubmit}
        >

            <Box display="flex">
                <Input
                    width={1/2}
                    placeholder="Имя"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    required/>
                <Input
                    width={1/2}
                    placeholder="Почта"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    required
                />
            </Box>


          <Box display="flex">
            <Input
                width={1/2}
                placeholder="Страна"
                type="text"
                name="country"
                value={values.country}
                onChange={onChange}
                required
            />
            <Input
                width={1/2}
                placeholder="Город"
                type="text"
                name="city"
                value={values.city}
                onChange={onChange}
                required
            />
          </Box>

          <Box display="flex" mb={4}>
            <Input
                width={3/4}
                placeholder="Адрес"
                type="text"
                name="address"
                value={values.address}
                onChange={onChange}
                required
            />
            <Input
                width={1/4}
                placeholder="Индекс"
                type="text"
                name="zip"
                value={values.zip}
                onChange={onChange}
                required
            /></Box>





            <Button width={1} type="submit">
                Оплатить
            </Button>

        </Box>
    );
};

export default CartForm;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.75rem 0.5rem;
  border: 2px solid ${theme.color.light};
  box-shadow: inset 0 0 1px rgba(0,0,0,.3);
  outline: none;
  border-radius: 6px;
  transition: all 0.2s;
  &:focus {
    box-shadow: inset 0 0 1px ${theme.color.primary}; 
  }
  ${boxExtra}
`;
