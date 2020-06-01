import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { LOAD_NEW_PAGE_AC, LOAD_NEW_USERS_AC } from '../../../redux/users-reducer'
import UsersAPI from './UsersAPI'


let mapStateToProps = (state) => {
    return (
        {
            // users: state.usersPage.users.map(user => <User name={user.name} id={user.id} followed={user.followed} />)
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        loadUsers: users => {
            let action = LOAD_NEW_USERS_AC(users)
            dispatch(action)
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer