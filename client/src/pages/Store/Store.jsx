import Category from '../../components/Category/Category';
import './Store.scss';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import { useEffect, useRef, useState } from 'react';
import { publicRequest } from '../../requestMethods';
import { linkBar } from '../../staticData';

const Store = () => {
    const store = useRef();
    const [ products, setProducts ] = useState([]);
    const [ latest, setLatest ] = useState([]);

    const handleClick = () => {
        store.current.scrollIntoView({
            behavior: "smooth",
            duration: 800
        })
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("/products")
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts();
    },[]);

    useEffect(() => {
        const getLatest = async () => {
            try {
                const res = await publicRequest.get("/products")
                setLatest(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getLatest();
    },[]);

  return (
    <div className='store default'>
        <div className="categories">
            <h2 className="header">Categories. <span>Browse through your favourite items.</span></h2>
            <div className="categoryContainer">
                {
                    linkBar.map((item) => (
                        <Category handleClick={handleClick} item={item}/>
                    ))
                }
            </div>
        </div>
        <h2 className="header">the latest. <span>take a look at whats new, right now!</span></h2>
            <Section section={latest}/>
        <h2 className="header">Store. <span>the best way to buy products you love.</span></h2>
        <div ref={store} className="storeWrapper">
            {
                products.map((item) => (
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Store