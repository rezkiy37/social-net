import React from 'react';
//css
import s from './Chats.module.css';
import ChatsBarContainer from './ChatsBar/ChatsBarContainer';
import ChatsWindowContainer from './ChatsWindow/ChatsWindowContainer';

class Chats extends React.Component {
    render() {
        return (
            <div className={s.chats}>
                <ChatsBarContainer />
                <ChatsWindowContainer />
            </div>
        )
    }
}

export default Chats;