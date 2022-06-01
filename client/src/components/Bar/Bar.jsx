import ListItem from '../ListItem/ListItem';
import './Bar.scss';
import { linkBar } from '../../staticData';

const Bar = () => {
  return (
    <ul className="bar">
        {
            linkBar.map((item) => (
                <ListItem item={item} key={item.id}/>
            ))
        }
    </ul>
  )
}

export default Bar