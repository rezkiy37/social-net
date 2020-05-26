const POST_TEXT = 'POST-TEXT';
const ADD_POST = 'ADD-POST';

//Post time
let time = (new Date()).toLocaleString();

let initialState = {
    posts: [
        { title: 'The first title1', text: 'THE TEXT1 from index.js', time: time },
        { title: 'The second title2', text: 'THE TEXT2', time: time },
        { title: 'The third title3', text: 'THE TEXT3', time: time },
        { title: 'The fourth title4', text: 'THE TEXT 4', time: time },
    ],
    textarea: 'placeholder'
}

const profileReducer = (state = initialState, action) => {
    let body = action.text;

    switch (action.type) {
        case POST_TEXT:
            return {
                ...state,
                textarea: body
            }

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { title: 'The added title1', text: body, time: action.time }],
                textarea: ''
            }

        default:
            return state;
    }
}

//actionsCreate
export const ADD_POST_CREATOR = (value, time) => ({ type: ADD_POST, text: value, time: time });
export const POST_TEXT_CREATOR = (value) => ({ type: POST_TEXT, text: value });

export default profileReducer;