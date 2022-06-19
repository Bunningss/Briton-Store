import './Product.scss';
import { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import demo from '../../img/product-demo.png';
import plus from '../../img/plus.png';
import minus from '../../img/minus.png';
import Feature from '../../components/Feature/Feature';
import Buystrip from '../../components/Buystrip/Buystrip';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethods';

const Product = () => {
  const [ quantity, setQuantity ] = useState(1);
  const [ product, setProduct ] = useState('');
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/product/${id}`)
        setProduct(res.data);
      } catch (err) {
        console.log(err)
      } 
    }
    getProduct();
  }, [id])

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
        <img src={product.image} alt={product.name} className="productImg" />
        <Buystrip/>
      </div>
      <div className="productRight">
        <h2 className="headerText">{product.name}</h2>
        <h3 className="headerText price">Price - {product.price}£</h3>
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