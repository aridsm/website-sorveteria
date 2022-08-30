import { useState } from 'react'

const useInput = (handleValidation) => {
 const [value, setValue] = useState('');
 const [wasTouched, setWasTouched] = useState(false);

 const handleChangeValue = ({target}) => {
    setValue(target.value);
    setWasTouched(false)
 }

 const handleBlurInput = () => {
    setWasTouched(true)
 }

 const valueIsValid = handleValidation(value);

 const error = wasTouched && !valueIsValid

 return {value, handleChange: handleChangeValue, handleBlur: handleBlurInput, error, valueIsValid, setValue}

}

export default useInput