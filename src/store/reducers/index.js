import {GET_PEOPLE} from '../constants/action-types'

const initialState = {
    people: []
    //atributo "selected", na hora de enviar para raffle esse atributo pode ser eliminado
};

function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_PEOPLE:
            return {
                ...state,
                people: payload
            }
        default:
            return state;
    }
};

export default rootReducer;