import './Product.scss';
import { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import demo from '../../img/trans-car.png';
import plus from '../../img/plus.png';
import minus from '../../img/minus.png';
import Feature from '../../components/Feature/Feature';
import Buystrip from '../../components/Buystrip/Buystrip';

const Product = () => {
  const [ quantity, setQuantity ] = useState(1);

  const add = () => {
    setQuantity(quantity + 1)
  };

  const reduce = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  };

  return (
    <>
    <div className='product'>
      <div className="productLeft">
        <img src={demo} alt="" className="productImg" />
        <Buystrip/>
      </div>
      <div className="productRight">
        <h2 className="headerText">Placeholder Title</h2>
        <h3 className="headerText price">Placeholder Price £</h3>
        <div className="features">
          <Feature/>
          <Feature/>
        </div>
        <div className="quantity">
          <p>Select Quantity: </p>
          <div className="quantityWrapper">
            <img onClick={add} src={plus} alt="" />
            <span>{quantity}</span>
            <img onClick={reduce} src={minus} alt="" />
          </div>
        </div>
        <PrimaryButton text={"Add to Bag"}/>
      </div>
    </div>
{/* Information Part */}
  <div className="pr-textZone">
    <h2 className="header">Product Information</h2>
  </div>
    </>
  )
}

export default Product