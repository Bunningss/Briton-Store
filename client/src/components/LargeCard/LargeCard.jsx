import './LargeCard.scss';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const LargeCard = ({ pack }) => {
    const { details, name, image, price, id } = pack;
  return (
    <Link className='largeCardLink' to="">
        <div className='largeCard'>
            <div className="largeCardContainer">
                <h4 className="productTitle">{name}</h4>
                <h4 className="productPrice">Only at {price}£</h4>
                <div className="productContent">
                    <img src={image} alt="" className="productImg" />
                    <div className="productDetails">
                        <h4>Details</h4>
                        <h4>Details</h4>
                        <h4>Details</h4>
                        <h4>Details</h4>
                        <h4>Details</h4>
                        <h4>Details</h4>
                        <h4>Details</h4>
                    </div>
                </div>
            </div>
            <PrimaryButton text={"whats in the pack"}/>
        </div>
    </Link>
  )
}

export default LargeCard