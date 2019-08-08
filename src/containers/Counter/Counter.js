import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    <li onClick={this.props.onDeleteResult}></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'UPDATE', value: 1}),
        onDecrementCounter: () => dispatch({type: 'UPDATE', value: -1}),
        onAdd5ToCounter: () => dispatch({type: 'UPDATE', value: 5}),
        onSub5FromCounter: () => dispatch({type: 'UPDATE', value: -5}),
        onStoreResult: () => dispatch({type:'STORE_RESULT', value: 0}),
        onDeleteResult: () => dispatch({type:'DELETE_RESULT', value: 0})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);