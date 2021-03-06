import Slider from '../../components/Slider/Slider';
import './Home.scss';
import { sliderData, pastaPacks } from '../../staticData';
import { bannerData } from '../../staticData';
import Section from '../../components/Section/Section';
import Banner from '../../components/Banner/Banner';
import { useEffect, useState } from 'react';
import { publicRequest } from '../../requestMethods';
import LargeCard from '../../components/LargeCard/LargeCard';

const Home = () => {
  const [ featured, setFeatured ] = useState([]);
  const [ deals, setDeals ] = useState([]);

  useEffect(() => {
    const getFeatured = async () => {
      try {
        const res = await publicRequest("/products");
        setFeatured(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFeatured();
  },[]);

  useEffect(() => {
    const getDeals = async () => {
      try {
        const res = await publicRequest("/products")
        setDeals(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getDeals();
  },[]);
  return (
    <div className='home default'>
          <Slider items={sliderData}/>
          {
            bannerData.map((item) => (
              <Banner item={item} key={item.id}/>
            ))
          }
          <Section header={"Featured Products"} section={featured}/>
          <Section header={"Hot Deals"} section={deals}/>
          <div className="pastaPacks">
            <h2 className="sectionHeader">Pasta Packages</h2>
            <div className="pastaPackWrapper">
              {
                pastaPacks.map((pack) => (
                  <LargeCard pack={pack} key={pack.id}/>
                ))
              }
            </div>
          </div>
    </div>
  )
}

export default Home