import {
    USERS
} from './types'
import axios from 'axios'


export const fetchUsers = (page = 1, callback) => dispatch => {
    axios.get('https://reqres.in/api/users?page='+page)
    .then(response => {
        dispatch({
            type: USERS,
            users : response.data.data,
            page : page
        })
        callback(true)
    }, error => {
        callback(false)
    });
}