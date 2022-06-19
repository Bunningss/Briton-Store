import './Section.scss';
import Card from '../Card/Card'

const Section = ({ header, section }) => {
  return (
    <div className="section">
        <h2 className='sectionHeader'>{header}</h2>
        <div className="cardContainer">
          {
            section?.map((item) => (
              <Card key={item.id} item={item}/>
            ))
          }
        </div>
    </div>
  )
}

export default Section