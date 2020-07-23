import {GET_PEOPLE} from '../constants/action-types'
import {combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

const initialState = {
    list: []
    //atributo "selected", na hora de enviar para raffle esse atributo pode ser eliminado
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_PEOPLE:
            return {
                ...state,
                list: payload
            }
        default:
            return state;
    }
};

const reducer = combineReducers({
    people: rootReducer,
    toastr: toastrReducer
})

export default reducer;