import {GET_PEOPLE} from '../constants/action-types';
import {toastr} from 'react-redux-toastr'

const axios = require('axios');
axios.defaults.baseURL = 'https://tranquil-mountain-84543.herokuapp.com/';

export function addPerson(payload) {
    return dispatchEvent => {
        axios.post('users/add', payload)
            .then(res => {
                dispatchEvent(getPeople());
            })
            .catch(() =>{
                //toastr.error('Erro ao editar', 'Não foi possível editar a pessoa');
            })
    }
};

export function editPerson(payload) {
    return dispatchEvent => {
        axios.put(`users/update/${payload._id}`, payload)
            .then(res => {
                dispatchEvent(getPeople());
            })
            .catch(() =>{
            })
    }
};

export function deletePerson(payload) {
    return dispatchEvent => {
        axios.delete(`users/${payload._id}`, payload)
        .then(res => {
            dispatchEvent(getPeople());
        })
        .catch(() =>{
            //toastr.error('Erro ao editar', 'Não foi possível editar a pessoa');
        })
    }
};

export function getPeople() {
    return dispatchEvent => {
        axios.get('users')
            .then(res => {
                dispatchEvent({type: GET_PEOPLE, payload: res.data})
            })
    }
};