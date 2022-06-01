import Slider from '../../components/Slider/Slider';
import './Home.scss';
import { sliderData } from '../../staticData';
import Section from '../../components/Section/Section';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <div className='home'>
          <Slider items={sliderData}/>
          <Section header={"Featured Products"}/>
          <Section header={"Hot Deals"}/>
          <Newsletter/>
    </div>
  )
}

export default Home