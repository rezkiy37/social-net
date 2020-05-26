import React from 'react';
//
import ChatsWindow, { Message } from './ChatsWindow';
//
import { NEW_MESSAGE_BODY_CREATOR, PUSH_NEW_MESSAGE_CREATOR } from '../../../../redux/chats-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return (
        {
            messages: state.chatsPage.chatsWindow.chatsWindowMessage.map(chat => <Message message={chat.message} id={chat.id} key={chat.id} />),

            textareaValue: state.chatsPage.chatsWindow.chatsMessageBody
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        onInput: value => {
            let action = NEW_MESSAGE_BODY_CREATOR(value);
            dispatch(action);
        },

        onClick: value => {
            let action = PUSH_NEW_MESSAGE_CREATOR(value);
            dispatch(action);
        }
    }
}

const ChatsWindowContainer = connect(mapStateToProps, mapDispatchToProps)(ChatsWindow);

export default ChatsWindowContainer;
