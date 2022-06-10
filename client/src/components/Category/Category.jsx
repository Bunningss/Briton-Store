import './Category.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/briton.png';

const Category = (props) => {
  const { handleClick } = props;
  return (
    <Link to='' onClick={handleClick} className='categoryWrapper'>
        <div className="category">
            <img src={logo} alt="" />
            <p>placeholder</p>
        </div>
    </Link>
  )
}

export default Category