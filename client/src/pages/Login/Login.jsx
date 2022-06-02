import './Login.scss';
import Inputs from '../../components/Inputs/Inputs';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import LoginOptions from '../../components/LoginOptions/LoginOptions';

const Login = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <h2 className="header">Welcome to Briton Store</h2>
        <form action="" className="loginForm">
          <Inputs/>
          <PrimaryButton text={"Continue"}/>
        </form>
        <p className='ra-text'>Or</p>
        <LoginOptions/>
      </div>
    </div>
  )
}

export default Login