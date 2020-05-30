import React from 'react'
//
import * as axios from 'axios';
//css
import s from './Users.module.css'

export const User = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <span>{props.id}</span>
            <button>{props.followed ? 'unfollow' : 'follow'}</button>
        </div>
    )
}

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {

                console.log(response.data.items);

                this.props.loadUsers(response.data.items)
            })
    }

    // componentDidUpdate() {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //         .then(response => {

    //             console.log(response.data.items);

    //             this.props.loadUsers(response.data.items)
    //         })
    // }

    render() {
        return (
            <div>
                {this.props.users}
            </div>
        )
    }
}

export default Users