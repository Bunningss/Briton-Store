import './NavHover.scss';
import ListItem from '../ListItem/ListItem';
import { useEffect, useRef } from 'react';

const NavHover = ({show}) => {
    const hoverItems = [
        {
            id: 1,
            name: "Sign Up",
            href: "/login"
        },
        {
            id: 2,
            name: "Log In",
            href: "/login"
        },
    ];

const hover = useRef();

useEffect(() => {
    if (!show) {
        hover.current.style.display = 'none'
    } else if (show) {
        hover.current.style.display = 'flex'
    }
},[show]);

  return (
    <ul ref={hover} className='navHover'>
        {
            hoverItems.map((item) => (
                <ListItem key={item.id} item={item}/>
            ))
        }
    </ul>
  )
}

export default NavHover