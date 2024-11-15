import { useState } from 'react';

const useFormValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };


  const validateForm = () => {
    let isValid = true;
    let newErrors = {};


    Object.keys(values).forEach(key => {
      if (!values[key] || values[key].trim() === '') {
        newErrors[key] = 'This field is required';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return {
    values,
    errors,
    handleChange,
    validateForm
  };
};

export default useFormValidation;