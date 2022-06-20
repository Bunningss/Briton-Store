import './Feature.scss';

const Feature = ({ feature }) => {
  return (
        <div className="feature">
            {/* <p></p> */}
            <p><span>{feature}</span></p>
        </div>
  )
}

export default Feature