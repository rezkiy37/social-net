import React from 'react';
//css
import s from './ChatsBar.module.css';

//Components
class ChatsBar extends React.Component {
    render() {
        //Create Links
        let chatsLink = this.props.chatsLink;
        return (
            <div className={s.chatsBar}>
                {chatsLink}
            </div>
        )
    }
}

export default ChatsBar;