import React from 'react'
//
import * as axios from 'axios';
//css
import s from './Users.module.css'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

export const GET_USERS = () => {
    return (
        <Query query={gql`
                {
                    users {
                        name age status followed
                    }
                }
            `}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading ...</p>;
                if (error) return <p>Error :(</p>;
                if (data) {
                    console.log(data.users)

                    return <div>data{data.users.map(user => <User name={user.name} age={user.age} status={user.status} followed={user.followed} />)}</div>
                }
            }}
        </Query>
    )
}

class Users extends React.Component {

    componentDidMount() {
        // axios.get("https://social-network.samuraijs.com/api/1.0/users")
        //     .then(response => {

        //         console.log(response.data.items);

        //         this.props.loadUsers(response.data.items)
        //     })
    }

    render() {
        return (
            <div>
                users
                <GET_USERS />
            </div>

        )
    }
}

export default Users