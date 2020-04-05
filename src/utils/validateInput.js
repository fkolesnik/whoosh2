const validateInput = (values) => {
  let error = "";

  for (let key in values) {
    if (values[key].length === 0) {
      return (error = "Заполните все поля, пожалуйста");
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      return (error = "Укажите правильный адрес почты");
    }
  }

  return error;
};

export default validateInput;
