import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/briton logo.png';
import cart from '../../img/cart.png';
import User from '../UserIcon/User';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navLeft">
        <Link className='logoContainer' to='/'>
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="navRight">
        <Link className='navRightImgContainer' to='/'>
          <img src={cart} alt="" className="navRightImg" />
        </Link>
        <User/>
      </div>
    </div>
  )
}

export default Navbar