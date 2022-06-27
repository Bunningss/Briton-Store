import './Error404.scss';
import error from '../../img/error.jpg';
import { useEffect } from 'react';
import { useRef } from 'react';

const Error404 = () => {
  const screenRef = useRef();
  useEffect(() => {
    window.scrollTo({
      top: screenRef.current.offsetTop,
      scrollBehavior: "smooth"
    });
  },[]);
  return (
    <div ref={screenRef} className='err404 default'>
      <h3>ERROR 404!</h3>
      <h2>the page you are looking for could not be found!</h2>
    </div>
  )
}

export default Error404