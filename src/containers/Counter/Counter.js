import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment"  clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement"  clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5"      clicked={this.props.onAdd5ToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub5FromCounter}  />
                <hr />
                <button onClick={()=> this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //onIncrementCounter: () => dispatch(actionCreators.increment(1)),
        onIncrementCounter: () => dispatch(actionCreators.update(1)),
        onDecrementCounter: () => dispatch(actionCreators.update(-1)),
        onAdd5ToCounter: () => dispatch(actionCreators.update(5)),
        onSub5FromCounter: () => dispatch(actionCreators.update(-5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
/*
        onIncrementCounter: () => dispatch({type: actionTypes.UPDATE, value: 1}),
        onDecrementCounter: () => dispatch({type: actionTypes.UPDATE, value: -1}),
        onAdd5ToCounter: () => dispatch({type: actionTypes.UPDATE, value: 5}),
        onSub5FromCounter: () => dispatch({type: actionTypes.UPDATE, value: -5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, value: 0, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, value: 0, resultElID: id})
*/
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);