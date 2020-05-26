import React from 'react';
//
import { ADD_POST_CREATOR, POST_TEXT_CREATOR } from '../../../redux/profile-reducer';
//
import { connect } from 'react-redux';
//
import Profile, { Post } from './Profile';


//container Component
let mapStateToProps = (state) => {
    return (
        {
            posts: state.profilePage.posts.map(post => <Post title={post.title} text={post.text} time={post.time} key={post.id} />),

            textareaValue: state.profilePage.textarea
        }
    )
}

let mapDispatchToProps = (dispatch) => {

    //time
    let time = (new Date()).toLocaleString();

    return {
        onInput: value => {
            let action = POST_TEXT_CREATOR(value);
            dispatch(action)
        },

        onClick: value => {
            let action = ADD_POST_CREATOR(value, time);
            dispatch(action)
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;



