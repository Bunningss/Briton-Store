import './Category.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/briton.png';

const Category = (props) => {
  const { handleClick, item } = props;
  return (
    <Link to='' onClick={handleClick} >
        <div className="category">
            <img src={logo} alt="" />
            <p>{item.name}</p>
        </div>
    </Link>
  )
}

export default Category