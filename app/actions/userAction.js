import {
    USERS
} from './types'

import axios from 'axios'


export const fetchUsers = () => dispatch => {

    axios.get('https://reqres.in/api/users?page_size=100')
    .then(response => {
        console.log(response.data);
        dispatch({
            type: USERS,
            users : response.data.data
        })
    }, error => {
        console.log(error);
    });
}