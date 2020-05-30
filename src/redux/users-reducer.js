const LOAD_NEW_PAGE = 'LOAD-NEW-PAGE'
const LOAD_NEW_USERS = 'LOAD-NEW-USERS'

let initialState = {
    users: [],
    currentPage: 1,
    usersOnPage: 5
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NEW_USERS:
            return {
                ...state,
                users: action.users
            }
        case LOAD_NEW_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state
    }
}


export const LOAD_NEW_PAGE_AC = (page) => {
    return ({ type: LOAD_NEW_PAGE, page })
}

export const LOAD_NEW_USERS_AC = (users) => {
    return ({ type: LOAD_NEW_USERS, users })
}

export default usersReducer