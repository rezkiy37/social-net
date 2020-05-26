import React from 'react';
//css
import s from './Header.module.css'
//components

//component
class Header extends React.Component {
    render() {

        return (
            <header className={s.header}>
                Header
            </header>
        )
    }
}

export default Header;