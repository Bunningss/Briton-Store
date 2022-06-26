import './WarningButton.scss';

const WarningButton = ({ text,onClick }) => {
  return (
    <button onClick={onClick} className='btnWrng'>{text}</button>
  )
}

export default WarningButton