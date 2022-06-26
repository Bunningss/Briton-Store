import './Login.scss';
import FormInput from '../../components/FormInput/FormInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import LoginOptions from '../../components/LoginOptions/LoginOptions';
import { publicRequest } from '../../requestMethods';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../Redux/userSlice';

const Login = () => {
  const emailRef = useRef();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");
  const [ user, setUser ] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailInput = [
    {
      id: 1,
      name: "email",
      errorMsg: "Enter a valid email address",
      placeholder: "Email address",
      type: 'email',
      required: true
    }
  ];
  const passInput = [
    {
      id: 1,
      name: "password",
      errorMsg: "Enter your password",
      placeholder: "Enter Password",
      type: 'password',
      required: true
    }
  ];

  const handleStart = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("auth/user", {email})
      res.data.msg && setUser(true)
    } catch (err) {
      navigate("/register")
    }
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("auth/login", {email, password})
      res.data.msg && setUser(false);
      dispatch(loginSuccess(res.data))
      navigate("/")
    } catch (err) {
      setError(err.response.data.msg)
    }
  }

  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const passChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div className='login default'>
      <div className="loginWrapper">
        <h2 className="header">Welcome to Briton Store</h2>
        { !user ?
            <form action="" className="loginForm">
              {
                emailInput.map((input) => (
                  <FormInput {...input} key={input.id} inputRef={emailRef} onChange={emailChange}/>
                ))
              }
              <PrimaryButton text={"Continue"} onClick={handleStart}/>
            </form> :
            <form action="" className="loginForm">
              {
                passInput.map((input) => (
                  <FormInput {...input} key={input.id} onChange={passChange}/>
                ))
              }
              <PrimaryButton text={"Continue"} onClick={handleFinish}/>
              {
                error ? <p className='redLight'>{error}</p> : null
              }
            </form>
        }
        <p className='ra-text'>Or</p>
        <LoginOptions/>
      </div>
    </div>
  )
}

export default Login