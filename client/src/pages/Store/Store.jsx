import Category from '../../components/Category/Category';
import './Store.scss';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import { useRef } from 'react';

const Store = () => {
    const store = useRef();

    const handleClick = () => {
        store.current.scrollIntoView({
            behavior: "smooth",
            duration: 800
        })
    };

  return (
    <div className='store'>
        <div className="categories">
            <h2 className="header">Categories. <span>Browse through your favourite items.</span></h2>
            <div className="categoryContainer">
                <Category handleClick={handleClick}/>
                <Category handleClick={handleClick}/>
                <Category handleClick={handleClick}/>
                <Category handleClick={handleClick}/>
                <Category handleClick={handleClick}/>
                <Category handleClick={handleClick}/>
                <Category handleClick={handleClick}/>
                <Category handleClick={handleClick}/>
            </div>
        </div>
        <h2 className="header">the latest. <span>take a look at whats new, right now!</span></h2>
            <Section/>
        <h2 className="header">Store. <span>the best way to buy products you love.</span></h2>
        <div ref={store} className="storeWrapper">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Store