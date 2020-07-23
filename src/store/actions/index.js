import {GET_PEOPLE} from '../constants/action-types';
import {toastr} from 'react-redux-toastr'

const axios = require('axios');
axios.defaults.baseURL = 'https://tranquil-mountain-84543.herokuapp.com/';

export function addPerson(payload) {
    return dispatchEvent => {
        axios.post('users/add', payload)
            .then(res => {
                toastr.success('Participante adicionado com sucesso!');
                dispatchEvent(getPeople());
            })
            .catch(() =>{
                toastr.error('Erro ao adicionar', 'Não foi possível adicionar a pessoa');
            })
    }
};

export function editPerson(payload) {
    return dispatchEvent => {
        axios.put(`users/update/${payload._id}`, payload)
            .then(res => {
                toastr.success('Participante editado com sucesso!');
                dispatchEvent(getPeople());
            })
            .catch(() =>{
                toastr.error('Erro ao editar', 'Não foi possível editar a pessoa');
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
            toastr.error('Erro ao remover', 'Não foi possível remover a pessoa');
        })
    }
};

export function getPeople() {
    return dispatchEvent => {
        axios.get('users')
            .then(res => {
                dispatchEvent({type: GET_PEOPLE, payload: res.data})
            })
            .catch(() =>{
                toastr.error('Erro de conexão', 'Tente novamente mais tarde...');
            })
    }
};

export function raffle(payload){
    return dispatchEvent => {
        axios.post('raffle/', payload)
            .then(() =>{
                console.log(payload)
                toastr.success('Parabéns!', 'Seu sorteio foi realizado com sucesso!')
            })
            .catch(() =>{
                toastr.error('Error de conexão', 'Tente novamente mais tarde...')
            })
    }
}