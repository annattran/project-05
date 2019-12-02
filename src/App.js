import React, { Component } from 'react';
import './App.css';

import firebase from './firebase.js';
import Header from './Header.js';
import Form from './Form.js';
import List from './List.js';
import Footer from './Footer.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      commentCards: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const database = snapshot.val();

      const newComments = [];
      for (let key in database) {
        const commentObject = {
          uniqueID: key,
          guestName: snapshot.child(key).child('name').val(),
          guestComment: snapshot.child(key).child('comment').val(),
          timeStamp: snapshot.child(key).child('time').val(),
          videoURL: snapshot.child(key).child('video').child([0]).val()
        }
        newComments.push(commentObject);
        // console.log(newComments)
      }

      this.setState({
        commentCards: newComments
      })

    })
  }

  render() {
    const videoJsOptions = {
      controls: true,
      width: 320,
      height: 240,
      fluid: false,
      plugins: {
        record: {
          audio: true,
          video: true,
          maxLength: 10,
          debug: true
        }
      }
    };
    return (
      <div>
        <Header />
        <Form {...videoJsOptions} />
        <List listItems={this.state.commentCards} />
        <Footer />
      </div>
    );
  }
}

export default App;
