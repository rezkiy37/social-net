import gql from "graphql-tag";

export const FETCH_USERS = gql`{users {name age status followed}}`