export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DELETE_RESULT = 'DELETE_RESULT';
export const STORE_RESULT = 'STORE_RESULT';
export const UPDATE = 'UPDATE';

export const increment = (value) => {
    return {
        type: INCREMENT,
        value: value
    }
};

export const update = (value) => {
    return {
        type: UPDATE,
        value: value
    }
};

export const deleteResult = (id) => {
    return {
        type: 'DELETE_RESULT',
        value: id
    }
};

export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    }
};