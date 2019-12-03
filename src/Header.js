import React, { Component } from 'react';
import './App.css'
import leaf from './assets/leaf.png';

class Header extends Component {

    onComment = (event) => {
        const firstForm = document.querySelector('.firstForm')
        const commentButton = document.querySelector('.commentButton')

        if (firstForm.style.display === 'none') {
            firstForm.style.display = 'flex';
            commentButton.style.display = 'none';
        } else {
            firstForm.style.display = 'none';
            commentButton.style.display = 'block';
        }
    }

    render() {
        return (
            <header>
                <img src={leaf} className="left leaf" alt="Green leaves in watercolor - positioned on the top left corner to frame the title." />
                <img src={leaf} className="right leaf" alt="Green leaves in watercolor - positioned on the bottom right corner to frame the title. " />
                <div className="button">
                    <button onClick={this.onComment} className="commentButton"> Add Comment</button>
                </div>
                <div className="title">
                    <h1>Jack ❤ Jill</h1>
                    <h2>November 28th 2019</h2>
                    <div className="instructions">
                        <p>Record a video with your well wishes, something funny, words of advice, or maybe date night ideas. When we look back we'll be reminded of all the people who helped celebrate our special day.</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;