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
    componentWillUnmount() {

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
                <Query query={gql`
                    {
                        directors {
                            name age
                        }
                    }
                `}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading ...</p>;
                        if (error) return <p>Error :(</p>;
                        if (data) {
                            console.log(data.directors);

                            return <div>data{data.directors[0].name}</div>
                        }


                    }}
                </Query>
            </div>

        )
    }
}

export default Users