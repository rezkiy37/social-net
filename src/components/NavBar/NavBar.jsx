import React from 'react';
import { NavLink } from 'react-router-dom';
//css
import s from './NavBar.module.css'
//components

//component
export const Link = (props) => {
    let commonClass = s.link,
        activeClass = s.active,
        settingsClass = `${commonClass} ${s.settings}`;

    if (props.title === 'Settings') {
        return (
            <NavLink to={props.to} className={settingsClass} activeClassName={activeClass} > {props.title}</NavLink >
        )
    }
    else {
        return (
            <NavLink to={props.to} className={commonClass} activeClassName={activeClass}>{props.title}</NavLink>
        )
    }
}

class NavBar extends React.Component {
    render() {
        return (
            <nav className={s.nav}>
                {this.props.links}
            </nav>
        )
    }
}

export default NavBar;


