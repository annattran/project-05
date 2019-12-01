import React, { Component } from 'react';
import './App.css';

import firebase from './firebase.js';
import Header from './Header.js';
import Form from './Form.js';
import List from './List.js';


import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
// register videojs-record plugin with this import
import 'videojs-record/dist/css/videojs.record.css';
import Record from 'videojs-record/dist/videojs.record.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      commentCards: [],
      guestName: '',
      guestComment: '',
      timeStamp: Date(Date.now()).slice(4, 21)
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
          timeStamp: snapshot.child(key).child('time').val()
        }
        newComments.push(commentObject);
        // console.log(newComments)
      }

      this.setState({
        commentCards: newComments,
        guestName: '',
        guestComment: '',
        timeStamp: Date(Date.now()).slice(4, 21)
      })

    })


    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, () => {
      // print version information at startup
      var version_info = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
      videojs.log(version_info);
    });

    // device is ready
    this.player.on('deviceReady', () => {
      console.log('device is ready!');
    });

    // user clicked the record button and started recording
    this.player.on('startRecord', () => {
      console.log('started recording!');
    });

    // user completed recording and stream is available
    this.player.on('finishRecord', () => {
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.
      console.log('finished recording: ', this.player.recordedData);

      // this.player.record().saveAs({ 'video': 'my-video-file-name.webm' });

      const storageRef = firebase.storage().ref();
      const videoID = this.player.recordedData.name;
      const videoRef = storageRef.child('video/' + videoID);
      const file = this.player.recordedData;
      videoRef.put(file).then(function(snapshot) {
        console.log('uploaded a blob file!')
      });
    });

    // error handling
    this.player.on('error', (element, error) => {
      console.warn(error);
    });

    this.player.on('deviceError', () => {
      console.error('device error:', this.player.deviceErrorCode);
    });


  }


  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }


  render() {
    return (
      <div>
        <Header />
        <Form />
        <List listItems={this.state.commentCards} />
        <div data-vjs-player>
          <video id="myVideo" ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsInline></video>
        </div>
      </div>
    );
  }
}

export default App;
