import Slider from '../../components/Slider/Slider';
import './Home.scss';
import { sliderData } from '../../staticData';
import Section from '../../components/Section/Section';

const Home = () => {
  return (
    <div className='home'>
          <Slider items={sliderData}/>
          <Section header={"Featured Products"}/>
          <Section header={"Hot Deals"}/>
    </div>
  )
}

export default Home