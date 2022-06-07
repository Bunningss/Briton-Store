import './Register.scss';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import FormInput from '../../components/FormInput/FormInput';

const Register = () => {
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      required: true,
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
      errorMsg: "Enter Your password"
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      required: true,
      errorMsg: "Confirm password"
    },
  ];
  return (
    <div className='register'>
        <div className="wrapper">
            <h2 className="header">Sign up to Briton Store</h2>
            <form action="" className="registerForm">
              {
                inputs.map((input) => (
                  <FormInput {...input} key={input.id}/>
                ))
              }
                <PrimaryButton text={"Continue"}/>
            </form>
        </div>
    </div>
  )
}

export default Register