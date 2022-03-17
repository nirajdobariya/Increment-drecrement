import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter( 'dec' )}  />
                <CounterControl label="Add 10" clicked={() => this.props.onAddCounter( 'add', 10 )}  />
                <CounterControl label="Subtract 15" clicked={() => this.props.onSubtractCounter( 'sub', 15 )}  />
                <hr></hr>
                <button onClick={this.props.onStoreResult}>STORE RESULT</button>
                <ul>
                {this.props.storeResults.map(strResult => (
                    <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                ))}
            </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter ,
        storeResults: state.results


    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type : 'INCREMENT'}),
        onDecrementCounter: () => dispatch({ type : 'DECREMENT'}),
        onAddCounter: () => dispatch({ type : 'ADD' ,val: 10}),
        onSubtractCounter: () => dispatch({ type : 'SUBTRACT' ,val: 15}),
        onStoreResult: () => dispatch({ type : 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({ type : 'DELETE_RESULT', resultElId: id})
    };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Counter);