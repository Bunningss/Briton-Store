import Slider from '../../components/Slider/Slider';
import './Home.scss';
import { sliderData } from '../../staticData';
import { bannerData } from '../../staticData';
import Section from '../../components/Section/Section';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div className='home'>
          <Slider items={sliderData}/>
          {
            bannerData.map((item) => (
              <Banner item={item} key={item.id}/>
            ))
          }
          <Section header={"Featured Products"}/>
          <Section header={"Hot Deals"}/>
    </div>
  )
}

export default Home