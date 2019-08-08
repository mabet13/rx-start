
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state=initialState, action) => {
    switch( action.type ) {
        case 'UPDATE':
            return {
                counter: state.counter +action.value
            }
        default: 
            return state;
    }
    
};

export default reducer;