import axios from 'axios';
import {AUTH_USER, AUTH_ERROR} from './types';

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);
        let token = response.data.token;
        dispatch({type: AUTH_USER, payload: token});
        localStorage.setItem('token', token);
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({type: AUTH_ERROR, payload: 'Email in use'});
    }
};

export const signin = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signin', formProps);
        let token = response.data.token;
        dispatch({type: AUTH_USER, payload: token});
        localStorage.setItem('token', token);
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({type: AUTH_ERROR, payload: 'Invalid login credentials'});
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {type: AUTH_USER, payload: ''};
};