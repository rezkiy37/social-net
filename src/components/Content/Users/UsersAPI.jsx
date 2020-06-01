import React from 'react'
//
import { graphql } from 'react-apollo';
import { FETCH_USERS } from './queries';
import Users from './Users';

const User = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <span>{props.status}</span>
            <p>{props.age}</p>
            <button>{props.followed ? 'unfollow' : 'follow'}</button>
        </div>
    )
}

const UserRender = ({ data: { loading, error, users } }) => {
    if (loading) {
        console.log(loading)
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error)
        return <p>Error!</p>
    }
    if (users) {
        console.log(users)
        return <div>data{users.map(user => <User name={user.name} age={user.age} status={user.status} followed={user.followed} key={user.id} />)}</div>
    }
}

const UserData = graphql(FETCH_USERS)(UserRender)

const UsersAPI = props => {

    return <Users data={<UserData />} loadUsers={props.loadUsers} />
}

export default UsersAPI