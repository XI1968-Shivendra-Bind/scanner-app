/* eslint-disable no-console */
import { useState } from 'react';
import useAuthContext from './useAuth';

const validate = (values) => {
  const error = {};
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email) {
    error.email = 'Email is required';
  } else if (!re.test(values.email.toLowerCase())) {
    error.email = 'Invalid email';
  }
  if (!values.password) {
    error.password = 'Password is required';
  }
  return error;
};
const useLoginForm = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({});
  const [auth, setAuth] = useAuthContext();

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setError(validate(values));
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const err = validate(values);
    setError(validate(values));
    if (Object.keys(err).length === 0) {
      setAuth({
        ...auth,
        isLogged: true,
        user: {
          ...auth.user,
          email: values.email,
        },
      });
    }
  };
  return {
    values, error, onChangeHandle, onSubmitHandle,
  };
};

export default useLoginForm;
