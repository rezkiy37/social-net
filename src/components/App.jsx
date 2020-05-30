import React from 'react';
//css
import s from './App.module.css';
//components
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import NavBarContainer from './NavBar/NavBarContainer';


class App extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <Header />
                <NavBarContainer />
                <Content />
                <Footer />
            </div >
        )
    }
}

export default App;