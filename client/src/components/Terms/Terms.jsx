import './Terms.scss';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="agreement">
        <input className='checkbox' required type="checkbox" name="" id="" />
        <p>By clicking continue I agree to Briton Store <Link to=''>Terms of Services</Link> and privacy policy.</p>
    </div>
  )
}

export default Terms