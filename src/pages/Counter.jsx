import React, { Component } from 'react';
import Counter from '../components/Counter/CounterComponent';

const counterData = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
];

class Counters extends Component {

    state = {
        counterData,
    };

    onIncrement = (id) => {
        this.setState((prevState) => {
            return {
                counterData: prevState.counterData.map((item) => {
                    if (item.id === id) {
                        return { ...item, count: item.count + 1 };
                    }
                    return item;
                }),
            };
        });
    };

    ondecrement = (id) => {
        this.setState((prevState) => {
            return {
                counterData: prevState.counterData.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item, count: item.count - 1
                        };
                    }
                    return item;
                }),
            };
            // count = 0 : count =0 ?count -1
        });
    };

    render() {
        return (
            <div>
                {this.state.counterData.map((item) => (
                    <Counter key={item.id} {...item} onIncrement={this.onIncrement} ondecrement={this.ondecrement} /> // same as the first one
                ))}
            </div>
        );
    }
}

export default Counters;