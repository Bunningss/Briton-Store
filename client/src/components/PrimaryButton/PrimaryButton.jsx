import './PrimaryButton.scss';

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button className='primaryBtn' onClick={onClick}>{text}</button>
  )
}

export default PrimaryButton