import './CartItem.scss';
import demo  from '../../img/trans-car.png';
import WarningButton from '../WarningButton/WarningButton';

const CartItem = () => {
  return (
    <div className='cartItem'>
        <div className="imageContainer">
            <img src={demo} alt="" />
        </div>
        <div className="textZone">
            <h6>Title Placeholder</h6>
            <p>Quantity 100</p>
            <p>Price Placeholder £</p>
            <WarningButton text={"Remove"}/>
        </div>
    </div>
  )
}

export default CartItem