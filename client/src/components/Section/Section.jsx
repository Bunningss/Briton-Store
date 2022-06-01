import './Section.scss';
import Card from '../Card/Card'

const Section = ({ header }) => {
  return (
    <div className="section">
        <h2 className='sectionHeader'>{header}</h2>
        <div className="cardContainer">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Section