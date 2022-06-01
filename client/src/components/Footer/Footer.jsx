import './Footer.scss';
import logo from '../../img/briton.png';

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Developed By <span>TATAMAX</span></h2>
        <h6>maintained by</h6>
        <img className='footerLogo' src={logo} alt="Briton Group" />
    </div>
  )
}

export default Footer