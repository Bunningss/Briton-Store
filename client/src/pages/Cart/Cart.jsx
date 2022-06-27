import CartItem from '../../components/CartItem/CartItem';
import './Cart.scss';
import { useSelector } from 'react-redux';
import Checkout from '../../components/Checkout/Checkout';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const cartItems = cart?.products;
  const emptyCart = cart.products.length === 0

  return (
    !emptyCart ?
      <div className='cart default'>
          <h2 className="header">Review your bag.</h2>
          <h4 className="sectionHeader">Free delivery and free returns.</h4>
          {
            cartItems.map((item) => (
              <CartItem key={item.product._id} item={item}/>
            ))
          }
          <Checkout/>
      </div> : 
      <h4 className='emptyCart'>Shopping Cart is Empty</h4>
  )
}

export default Cart