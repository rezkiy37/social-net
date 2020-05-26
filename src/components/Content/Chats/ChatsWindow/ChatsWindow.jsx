import React from 'react';
//css
import s from './ChatsWindow.module.css';


//Components
export const Message = (props) => {
    return (
        <p>{props.message} {props.id}</p>
    )
}

class ChatsWindow extends React.Component {
    render() {
        //refs
        let textArea = React.createRef();

        //chats messages
        let messages = this.props.messages;

        //textarea value
        let value = this.props.textareaValue;

        //functions
        let onInput = () => {
            let value = textArea.current.value;

            this.props.onInput(value);
        }
        let onClick = () => {
            let value = this.props.textareaValue;

            this.props.onClick(value);
        }

        return (
            <div className={s.chatsWindow}>
                ChatsWindow
                {messages}
                <textarea ref={textArea} value={value}
                    onInput={onInput}
                ></textarea>
                <button onClick={onClick}>Add</button>
            </div>
        )
    }
}


export default ChatsWindow;
