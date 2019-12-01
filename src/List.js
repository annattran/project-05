import React, { Component } from 'react';
import './App.css'


class List extends Component {
    render() {
        return (
            <ul>
                {this.props.listItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <div>{item.guestName}</div>
                            <div>{item.guestComment}</div>
                            <div>{item.timeStamp}</div>
                            <div>{item.videoURL}</div>
                            <div className="videoComment">
                                <video width="320" height="240" controls>
                                    <source src={item.videoURL} type="video/webm" />
                                </video>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default List;