const NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY';
const PUSH_NEW_MESSAGE = 'PUSH-NEW-MESSAGE';

let initialState = {
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

let chatsReducer = (state = initialState, action) => {
    let body = action.body;
    let stateCopy;
    switch (action.type) {
        case NEW_MESSAGE_BODY:
            stateCopy = { ...state };
            stateCopy.chatsWindow = {
                ...state.chatsWindow,

                chatsMessageBody: body
            }
            return stateCopy;

        case PUSH_NEW_MESSAGE:
            stateCopy = { ...state };
            stateCopy.chatsWindow = {
                ...state.chatsWindow,

                chatsMessageBody: '',

                chatsWindowMessage: [...state.chatsWindow.chatsWindowMessage, { message: body, id: 6 }]
            }
            return stateCopy;

        default:
            return state;
    }
}

//actionsCreate
export const NEW_MESSAGE_BODY_CREATOR = (body) => ({ type: NEW_MESSAGE_BODY, body: body });
export const PUSH_NEW_MESSAGE_CREATOR = (body) => ({ type: PUSH_NEW_MESSAGE, body: body });

export default chatsReducer;