import React, { Component } from 'react';
import './App.css'


class List extends Component {
    constructor() {
        super();
        this.state = {
            commentCards: [],
            guestName: '',
            guestComment: '',
            timeStamp: Date(Date.now()).slice(4, 21)
        }
    }

    render() {
        return (
            <ul>
                {this.props.listItems.map((item, i) => {

                    return (
                        <li key={i}>
                            <div>{item.guestName}</div>
                            <div>{item.guestComment}</div>
                            <div>{item.timeStamp}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default List;