import './FormInput.scss';
import { useState } from 'react';

const FormInput = ( props ) => {
  const [ focused, setFocused ] = useState(false);
  const { id, onChange, errorMsg, ...others } = props;

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div>
      <input className='formInput' {...others} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
      <span className='error'>{errorMsg}</span>
    </div>

  )
}

export default FormInput