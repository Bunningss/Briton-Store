import './Register.scss';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import FormInput from '../../components/FormInput/FormInput';
import { useState } from 'react';
import { publicRequest } from '../../requestMethods';
import { useNavigate } from 'react-router-dom';
import Terms from '../../components/Terms/Terms';

const Register = () => {
  const navigate = useNavigate();
  const [ error, setError ] = useState("");
  const [ values, setValues ] = useState({
    name: "",
    email: "",
    password: ""
  })

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      required: true,
      minLength: 5,
      errorMsg: "Enter Your Full Name"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email address",
      required: true,
      errorMsg: "Enter a valid email address"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      minLength: 8,
      errorMsg: "Minimum 8 characters"
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      required: true,
      errorMsg: "Passwords do not match",
      pattern: values.password
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await publicRequest.post("/auth/register", values)
      navigate("/login")
    } catch (err) {
      setError(err.response.data.msg)
    }
  }

  return (
    <div className='register default'>
        <div className="wrapper">
            <h2 className="header">Sign up to Briton Store</h2>
            <form action="" className="registerForm">
              {
                inputs.map((input) => (
                  <FormInput {...input} key={input.id} value={values[input.name]} onChange={onChange}/>
                ))
              }
              <Terms/>
              <PrimaryButton text={"Continue"} onClick={handleRegister}/>
                {
                  error && <p className='redLight'>{error}</p>
                }
            </form>
        </div>
    </div>
  )
}

export default Register