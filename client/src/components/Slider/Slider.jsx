import './Slider.scss';
import arrow from '../../img/arrow-outlined-crimson.png';
import { useRef } from 'react';

const Slider = ({ items }) => {
  const sliderRef = useRef();
  let index = 1;

  const nextSlide = () => {
    sliderRef.current.style.transform = `translateX(${index * -100}%)`;
    index++;
    if (index > items.length - 1) {
      index = 0;
    }
  }

  return (
    <div className='slider'>
      <div ref={sliderRef} className="wrapper">
        {
          items.map((item) => (
            <img className='sliderImg' src={item.img} alt="Slider Image" key={item.id} />
          ))
        }
      </div>
      {/* <img src={arrow} onClick={prevSlide} alt="Arrow" className="sliderIcon iconLeft" /> */}
      <img src={arrow} onClick={nextSlide} alt="Arrow" className="sliderIcon iconRight" />
    </div>
  )
}

export default Slider