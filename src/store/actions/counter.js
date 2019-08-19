import * as actionTypes from './actionsTypes';

export const increment = (value) => {
    return {
        type: actionTypes.INCREMENT,
        value: value
    }
};

export const update = (value) => {
    return {
        type: actionTypes.UPDATE,
        value: value
    }
};