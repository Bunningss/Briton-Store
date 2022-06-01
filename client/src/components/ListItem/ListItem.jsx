import './ListItem.scss';
import { Link } from 'react-router-dom';

const ListItem = ({ item }) => {
  return (
    <li className='listItem'>
        <Link to={item.href}>{item.name}</Link>
    </li>
  )
}

export default ListItem