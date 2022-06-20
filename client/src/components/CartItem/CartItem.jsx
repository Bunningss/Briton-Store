import './CartItem.scss';
import WarningButton from '../WarningButton/WarningButton';

const CartItem = ({ item }) => {
  return (
    <div className='cartItem'>
        <div className="imageContainer">
            <img src={item?.product?.image[0]} alt={item?.product?.name} />
        </div>
        <div className="textZone">
            <h6>{item?.product?.name}</h6>
            <p>Quantity - {item.quantity}</p>
            <p>Price - {item.price*item.quantity}£</p>
            <WarningButton text={"Remove"}/>
        </div>
    </div>
  )
}

export default CartItem