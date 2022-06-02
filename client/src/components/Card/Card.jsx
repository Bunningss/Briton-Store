import { Link } from 'react-router-dom';
import './Card.scss';
import demo from '../../img/trans-car.png';

const Card = () => {
  return (
    <div className="card">
      <Link to='/product/:id'>
        <div className="wrapper">
          <div className="textZone">
            <p>Placeholder Text</p>
            <h4>Oh. So. Pro</h4>
            <p>Placeholder Text £</p>
          </div>
          <img src={demo} alt="" className="cardImg" />
        </div>
      </Link>
    </div>
  )
}

export default Card