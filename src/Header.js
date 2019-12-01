import React, { Component } from 'react';
import './App.css'


class Header extends Component {

    onClick = (event) => {
        const form = document.querySelector('form')
        if (form.style.display === 'none') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    }

    render() {
        return (
            <header>
                <h1>Jack & Jill</h1>
                <h2>November 28th 2019</h2>
                <button onClick={this.onClick}> Add Comment</button>
            </header>
        )
    }
}

export default Header;