import React from 'react';
//css
import s from './App.module.css';
//components
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Content from './Content/Content';
import Footer from './Footer/Footer';


class App extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <Header />
                <NavBar />
                <Content />
                <Footer />
            </div >
        )
    }
}


export default App;