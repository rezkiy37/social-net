let initialState = {
    links: [
        { to: 'profile', title: 'Profile' },
        { to: 'users', title: 'Users' },
        { to: 'feed', title: 'Feed' },
        { to: 'chats', title: 'Chats' },
        { to: 'feedback', title: 'Feedback' },
        { to: 'settings', title: 'Settings' }
    ]
}

let navBarReducer = (state = initialState) => state

export default navBarReducer