import CartItem from '../../components/CartItem/CartItem';
import './Cart.scss';

const Cart = () => {
  return (
    <div className='cart'>
        <h2 className="header">Review your bag.</h2>
        <h4 className="sectionHeader">Free delivery and free returns.</h4>
        <CartItem/>
    </div>
  )
}

export default Cart