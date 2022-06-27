import './Checkout.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { useStripe } from '@stripe/react-stripe-js';
import { publicRequest } from '../../requestMethods';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector(state => state.cart)
  const cartItems = cart?.products
  const stripe = useStripe();
  const handleCheckout = async () => {
    const line_items = cartItems.map((item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: "gbp",
          unit_amount: item.price * 100, //Amount is in cents
          product_data: {
            name: item.product.name, //Product Name
            images: [item.product?.image[0]] //Product Image
          }
        }
      }
    });
    try {
      const response = await publicRequest.post("/checkout", {
        line_items,
        customer_email: "abc@gmail.com"
      });
      const { sessionId } = response.data;
      await stripe.redirectToCheckout({sessionId});
    } catch (err) {
      console.log(err.mesasge)
    }
  };
  return (
    <div className='checkout'>
        <div className="checkoutContent">
          {/* <button onClick={handleCheckout}>click</button> */}
            <PrimaryButton text={"Proceed to checkout"} onClick={handleCheckout}/>
        </div>
    </div>
  )
}

export default Checkout