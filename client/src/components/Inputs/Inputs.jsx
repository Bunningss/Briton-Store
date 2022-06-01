import './Inputs.scss';

const Inputs = ({ items }) => {
  const { placeholder, type, required } = items;
  return (
    <input className="input" placeholder={placeholder} type={type} required={required} />
  )
}

export default Inputs