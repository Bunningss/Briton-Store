import Category from '../../components/Category/Category';
import './Store.scss';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';

const Store = () => {
  return (
    <div className='store sectionPadding'>
        <div className="categories">
            <h2 className="header">Categories. <span>Browse through your favourite items.</span></h2>
            <div className="categoryContainer">
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </div>
        </div>
        <h2 className="header">the latest. <span>take a look at whats new, right now!</span></h2>
            <Section/>
        <h2 className="header">Store. <span>the best way to buy products you love.</span></h2>
        <div className="storeWrapper">
            <Card/>
        </div>
    </div>
  )
}

export default Store