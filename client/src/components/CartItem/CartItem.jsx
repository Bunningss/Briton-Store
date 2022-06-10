import './CartItem.scss';
import demo  from '../../img/product-demo.png';
import WarningButton from '../WarningButton/WarningButton';

const CartItem = () => {
  return (
    <div className='cartItem'>
        <div className="imageContainer">
            <img src={demo} alt="" />
        </div>
        <div className="textZone">
            <h6>Boost Energy Drink</h6>
            <p>Quantity 100</p>
            <p>Price - 30£</p>
            <WarningButton text={"Remove"}/>
        </div>
    </div>
  )
}

export default CartItem