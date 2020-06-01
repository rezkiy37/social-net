import React from 'react'
//
//import * as axios from 'axios';
//css
import s from './Users.module.css'
import { graphql } from 'react-apollo';
import { FETCH_USERS } from './queries';

export const User = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <span>{props.status}</span>
            <p>{props.age}</p>
            <button>{props.followed ? 'unfollow' : 'follow'}</button>
        </div>
    )
}


// const UserRender = ({ data: { loading, error, users } }) => {
//     if (loading) {
//         console.log(loading)
//         return <p>Loading...</p>
//     }
//     if (error) {
//         console.log(error)
//         return <p>Error!</p>
//     }
//     if (users) {
//         console.log(users)
//         return <div>data{users.map(user => <User name={user.name} age={user.age} status={user.status} followed={user.followed} />)}</div>
//     }
// }

//const UserData = graphql(FETCH_USERS)(UserRender)


class Users extends React.Component {

    componentDidMount() {
        // axios.get("https://social-network.samuraijs.com/api/1.0/users")
        //     .then(response => {
        //         this.props.loadUsers(response.data.items)
        //     })
    }

    constructor(props) {
        super(props)
        this.props.loadUsers(this.props.data)
    }

    render() {
        return (
            <div>
                users
                {this.props.data}
            </div>
        )
    }
}

export default Users