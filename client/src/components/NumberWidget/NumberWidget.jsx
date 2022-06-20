import { useSelector } from 'react-redux';
import './NumberWidget.scss';

const NumberWidget = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <span className='widget'>{quantity}</span>
  )
}

export default NumberWidget