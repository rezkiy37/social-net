import profileReducer from "./profile-reducer";
import chatsReducer from "./chats-reducer";

//Post time
let time = (new Date()).toLocaleString();

let store = {
    _state: {
        contentPage: {
            profilePage: {
                posts: [
                    { title: 'The first title1', text: 'THE TEXT1 from index.js', time: time },
                    { title: 'The second title2', text: 'THE TEXT2', time: time },
                    { title: 'The third title3', text: 'THE TEXT3', time: time },
                    { title: 'The fourth title4', text: 'THE TEXT 4', time: time },
                    { title: 'The fifth title5', text: 'THE TEXT 5', time: time }
                ],
                textarea: 'placeholder'
            },
            chatsPage: {
                chatsBar: {
                    chatsLink: [
                        { name: 'Michael', id: 1, ul: true },
                        { name: 'Peter', id: 2, ul: false },
                        { name: 'Ivan', id: 3, ul: true },
                        { name: 'David', id: 4, ul: false },
                        { name: 'Davida', id: 5, ul: false }
                    ]
                },
                chatsWindow: {
                    chatsWindowMessage: [
                        { message: 'Michael Rezkiy', id: 1 },
                        { message: 'Peter Redux', id: 2 },
                        { message: 'Ivan', id: 3 },
                        { message: 'David', id: 4 },
                        { message: 'Davida', id: 5 }
                    ],
                    chatsMessageBody: 'text'
                }
            }
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() { },

    dispatch(action) {
        profileReducer(action, this.getState().contentPage.profilePage);

        chatsReducer(action, this.getState().contentPage.chatsPage.chatsWindow);

        this._callSubscriber(this.getState());
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
//window.store = store;