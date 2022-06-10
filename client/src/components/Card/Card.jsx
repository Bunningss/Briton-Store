import { Link } from 'react-router-dom';
import './Card.scss';
import demo from '../../img/product-demo.png';

const Card = () => {
  return (
    <div className="card">
      <Link to='/product/:id'>
        <div className="wrapper">
          <div className="textZone">
            <p>The father of all drinks.</p>
            <h4>Boost Energy Drink</h4>
            <p>Price - 30£</p>
          </div>
          <img src={demo} alt="" className="cardImg" />
        </div>
      </Link>
    </div>
  )
}

export default Card