import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0
}

const reducer = (state=initialState, action) => {
    switch( action.type ) {
        case actionTypes.UPDATE:
            //const newState = Object.assign({}, state);
            //newState.counter = state.counter +action.value
            return {
                ...state,
                counter: state.counter +action.value
            };
        default: 
            return state;
    }
    
};

export default reducer;