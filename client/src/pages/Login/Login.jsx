import './Login.scss';
import FormInput from '../../components/FormInput/FormInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import LoginOptions from '../../components/LoginOptions/LoginOptions';

const Login = () => {

  const inputs = [
    {
      id: 1,
      name: "email",
      errorMsg: "Enter a valid email address",
      placeholder: "Email address",
      type: 'email',
      required: true
    }
  ];

  const onChange = () => {

  };
  
  return (
    <div className='login'>
      <div className="loginWrapper">
        <h2 className="header">Welcome to Briton Store</h2>
        <form action="" className="loginForm">
          {
            inputs.map((input) => (
              <FormInput {...input} key={input.id} onChange={onChange}/>
            ))
          }
          <PrimaryButton text={"Continue"}/>
        </form>
        <p className='ra-text'>Or</p>
        <LoginOptions/>
      </div>
    </div>
  )
}

export default Login