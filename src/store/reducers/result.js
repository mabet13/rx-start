import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state=initialState, action) => {
    switch( action.type ) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter((el) => el.id !== action.resultElID);
            return updateObject(state, {results: updatedArray});
        default: 
            return state;
    }
};

export default reducer;