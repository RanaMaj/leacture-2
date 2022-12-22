import React, { Component } from 'react'

// Reconsolition

class TodoList extends Component {
    Data = ['ahmed', 'mohammed', 'mahmoud', 'may', 'hiba', 'saleh', 'reema'];
    render() {
        return (
            <div>
                <ul>
                    {this.Data.map((nameItem) => (
                        <li key={nameItem}>
                            <span >User Name: {nameItem}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoList;