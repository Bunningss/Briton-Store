import Option from '../Option/Option';
import './LoginOptions.scss';
import { loginOptions } from '../../staticData';

const LoginOptions = () => {
  return (
    <div className='loginOptions'>
      {
        loginOptions.map((option) => (
          <Option option={option}/>
        ))
      }
    </div>
  )
}

export default LoginOptions