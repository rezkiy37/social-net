import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import chatsReducer from "./chats-reducer";

//combine reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    chatsPage: chatsReducer
});

//create store
let store = createStore(reducers);

window.store = store;

export default store;