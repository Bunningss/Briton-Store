import './Newsletter.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import FormInput from '../FormInput/FormInput'
import { useState } from 'react';

const Newsletter = () => {
  const [ values, setValues ] = useState({
    name: "",
    email: ""
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      errorMsg: "Enter your full name",
      pattern: "^[A-Za-z]+$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMsg: "Enter a valid email address",
      required: true
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className='newsletter'>
        <div className="wrapper">
            <div className="textZone">
                <h2 className="headerText">Newsletter</h2>
                <p>Get updates about your favourite products</p>
            </div>
            <form action="" className="newsForm">
              {
                inputs.map((input) => (
                  <FormInput {...input} key={input.id} onChange={onChange} value={values[input.name]} />
                ))
              }
                <PrimaryButton text={"Subscribe"}/>
                <div className="agreement">
                  <input type="checkbox" name="" id="" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Newsletter