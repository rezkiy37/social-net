import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import chatsReducer from "./chats-reducer";
import navBarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";

//combine reducers
let reducers = combineReducers({
    profilePage: profileReducer,
    chatsPage: chatsReducer,
    usersPage: usersReducer,
    navBar: navBarReducer,
});

//create store
let store = createStore(reducers);

window.store = store;

export default store;