import React from 'react';
import { connect } from 'react-redux';
//components
import NavBar, { Link } from './NavBar';

//mapStateToProps
let mapStateToProps = (state) => {
    return (
        {
            links: state.navBar.links.map(link => <Link to={link.to} title={link.title} />)
        }
    )
}

const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer;