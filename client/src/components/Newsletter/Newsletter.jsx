import './Newsletter.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Inputs from '../Inputs/Inputs';
import { newsletterInputs } from '../../staticData';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="wrapper">
            <div className="textZone">
                <h2 className="headerText">Newsletter</h2>
                <p>Get updates about your favourite products</p>
            </div>
            <form action="" className="newsForm">
              {
                newsletterInputs.map((items) => (
                  <Inputs items={items} key={items.id}/>
                ))
              }
                <PrimaryButton text={"Subscribe"}/>
                <div className="agreement">
                  <input type="checkbox" name="" id="" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Newsletter