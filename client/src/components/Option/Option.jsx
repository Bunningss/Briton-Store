import './Option.scss';

const Option = ({ option }) => {
  return (
    <div className='option'>
        <img className='optIcon' src={option.icon} alt="" />
        <p className="optText">{option.name}</p>
    </div>
  )
}

export default Option