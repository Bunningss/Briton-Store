import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/product/${item?._id}`}>
        <div className="wrapper">
          <div className="textZone">
            <p>{item?.header}</p>
            <h4>{item?.name}</h4>
            <p>Price - {item?.price}£</p>
          </div>
          <img src={item?.image[0]} alt="" className="cardImg" />
        </div>
      </Link>
    </div>
  )
}

export default Card