import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import Header from './Header.js';
import Form from './Form.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      commentCards: [],
      guestName: '',
      guestComment: ''
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
          guestComment: snapshot.child(key).child('comment').val()
        }
        newComments.push(commentObject);
        // console.log(newComments)
      }

      this.setState({
        commentCards: newComments,
        guestName: '',
        guestComment: ''
      })

    })
  }

  // onChange = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   // console.log('name', name);
  //   // console.log('value', value);
  //   this.setState({
  //     [name]: value
  //   })
  // }

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   const nameToBeAdded = this.state.guestName;
  //   const commentToBeAdded = this.state.guestComment;

  //   if (this.state.guestName !== '' && this.state.guestComment) {
  //     firebase.database().ref().push({ 'name': nameToBeAdded, 'comment': commentToBeAdded })
  //     this.setState({
  //       guestName: '',
  //       guestComment: ''
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <Header />
        <Form />

        <ul>
          {this.state.commentCards.map((card, i) => {
            // console.log(card);
            return (
              <li key={i}>
                <div>{card.guestName}</div>
                <div>{card.guestComment}</div>
              </li>
            )
          })}
        </ul>

      </div>
    );
  }
}

export default App;
