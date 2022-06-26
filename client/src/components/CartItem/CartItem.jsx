import './CartItem.scss';
import WarningButton from '../WarningButton/WarningButton';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../Redux/cartSlice';

const CartItem = ({ item }) => {
const dispatch = useDispatch();
const handleCart = () => {
  dispatch(removeProduct({
    product: item?.product, quantity: item?.quantity, price: item?.product.price
  }))
};

  return (
    <div className='cartItem'>
        <div className="imageContainer">
            <img src={item?.product?.image[0]} alt={item?.product?.name} />
        </div>
        <div className="textZone">
            <h6>{item?.product?.name}</h6>
            <p>Quantity - {item.quantity}</p>
            <p>Price - {item.price*item.quantity}£</p>
            <WarningButton text={"Remove"} onClick={handleCart}/>
        </div>
    </div>
  )
}

export default CartItem