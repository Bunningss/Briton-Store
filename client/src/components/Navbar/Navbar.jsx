import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/briton logo.png';
import cart from '../../img/cart.png';
import User from '../UserIcon/User';
import Hamburger from '../Hamburger/Hamburger';
import NumberWidget from '../NumberWidget/NumberWidget';

const Navbar = ({ active, setActive }) => {
  return (
    <div className='navbar'>
      <div className="navLeft">
        <Link className='logoContainer' to='/'>
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="navRight">
        <Link className='navRightImgContainer' to='/cart'>
          <img src={cart} alt="" className="navRightImg" />
          <NumberWidget/>
        </Link>
        <User/>
      </div>
      <Hamburger active={active} setActive={setActive}/>
    </div>
  )
}

export default Navbar