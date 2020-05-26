import React from 'react';
//
import { connect } from "react-redux";
//
import ChatsBar from "./ChatsBar";
import { NavLink } from 'react-router-dom';


let mapStateToProps = (state) => {
    return (
        {
            chatsLink: state.chatsPage.chatsBar.chatsLink.filter(link => link.ul === false).map(link => <NavLink to={`chats/${link.id}`} name={`${link.ul}`} key={link.id}>{link.name}</NavLink>)
        }
    )
}

const ChatsBarContainer = connect(mapStateToProps)(ChatsBar);

export default ChatsBarContainer;