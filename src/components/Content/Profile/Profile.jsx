import React from 'react';
//css
import s from './Profile.module.css';

//components
export const Post = (props) => {
    return (
        <div><h2>{props.title}</h2><p>{props.text}</p><time>{props.time}</time></div>
    )
}

class Profile extends React.Component {

    render() {
        //click on btn and textarea
        let btn = React.createRef();
        let textArea = React.createRef();

        //value textarea
        let value = this.props.textareaValue;

        //functions
        const onClick = () => {
            //value textarea
            let value = this.props.textareaValue;

            this.props.onClick(value)
        }

        const onInput = () => {
            //value textarea
            let value = textArea.current.value;

            this.props.onInput(value)
        }

        //return
        return (
            <div className={s.profile}>
                Profile
                {this.props.posts}

                <textarea ref={textArea} onInput={onInput}
                    value={value} />

                <button ref={btn}
                    onClick={onClick}>button{value}</button>
            </div>
        )
    }
}

export default Profile;