import './ListItem.scss';
import { Link } from 'react-router-dom';

const ListItem = ({ item, handleClick }) => {
  return (
    <Link to={item.href} onClick={handleClick}>
      <li className="listItem">{item.name}</li>
    </Link>
  )
}

export default ListItem