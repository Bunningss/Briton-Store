import './Product.scss';
import { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import plus from '../../img/plus.png';
import minus from '../../img/minus.png';
import Feature from '../../components/Feature/Feature';
import Buystrip from '../../components/Buystrip/Buystrip';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethods';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/cartSlice'

const Product = () => {
  const [ quantity, setQuantity ] = useState(1);
  const [ product, setProduct ] = useState('');
  const dispatch = useDispatch();
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

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity-1);
    } else {
      setQuantity(quantity+1)
    }
  }

  const handleCart = () => {
    dispatch(addProduct({
      product, quantity, price: product.price
    }))
  }

  const features = product?.feature

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
          {
            features?.map((feature) => (
              <Feature feature={feature}/>
            ))
          }
        </div>
        <div className="quantity">
          <p>Select Quantity: </p>
          <div className="quantityWrapper">
            <img onClick={() => handleQuantity("inc")} src={plus} alt="" />
            <span>{quantity}</span>
            <img onClick={() => handleQuantity("dec")} src={minus} alt="" />
          </div>
        </div>
        <PrimaryButton text={"Add to Bag"} onClick={handleCart}/>
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