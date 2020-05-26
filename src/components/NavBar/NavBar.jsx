import React from 'react';
import { NavLink } from 'react-router-dom';
//css
import s from './NavBar.module.css'
//components

//component
const Link = (props) => {
    let path = props.path,
        name = props.name,
        commonClass = s.link,
        activeClass = s.active;

    return (
        <NavLink to={path} className={commonClass} activeClassName={activeClass}>{name}</NavLink>
    )
}

class NavBar extends React.Component {
    render() {
        return (
            <nav className={s.nav}>
                <Link path='profile' name='Profile' />
                <Link path='feed' name='Feed' />
                <Link path='chats' name='Chats' />
                <Link path='feedback' name='Feedback' />
                <Link path='settings' name='Settings' />
            </nav>
        )
    }
}

export default NavBar;