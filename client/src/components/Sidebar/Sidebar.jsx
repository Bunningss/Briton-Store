import './Sidebar.scss';
import { linkBar } from '../../staticData';
import ListItem from '../ListItem/ListItem';

const Sidebar = ({ active, setActive }) => {

  const handleClick = () => {
    setActive(!active)
  };

  return (
    <div className={active ? 'sidebar active' : 'sidebar'}>
        <ul className="sidebarList">
            {
                linkBar.map((item) => (
                    <ListItem handleClick={handleClick} key={item.id} item={item}/>
                ))
            }
        </ul>
    </div>
  )
}

export default Sidebar