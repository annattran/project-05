import React, { Component } from 'react';
import './App.css'
import firebase from './firebase.js';

import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
// register videojs-record plugin with this import
import 'videojs-record/dist/css/videojs.record.css';
import Record from 'videojs-record/dist/videojs.record.js';



class Form extends Component {
    constructor() {
        super();
        this.state = {
            guestName: '',
            guestComment: '',
            timeStamp: '',
            video: []
        }
    }

    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, () => {
            // print version information at startup
            const version_info = 'Using video.js ' + videojs.VERSION +
                ' with videojs-record ' + videojs.getPluginVersion('record') +
                ' and recordrtc ' + RecordRTC.version;
            videojs.log(version_info);
        });

        // device is ready
        this.player.on('deviceReady', () => {
            // console.log('device is ready!');
        });

        // user clicked the record button and started recording
        this.player.on('startRecord', () => {
            // console.log('started recording!');
        });

        // user completed recording and stream is available
        this.player.on('finishRecord', () => {
            // recordedData is a blob object containing the recorded data that
            // can be downloaded by the user, stored on server etc.
            // console.log('finished recording: ', this.player.recordedData);

            alert('Thank you for your video! Please wait until the video is done uploading before clicking submit!')
            // this.player.record().saveAs({ 'video': 'my-video-file-name.webm' });
            const file = this.player.recordedData;
            const storageRef = firebase.storage().ref();
            const videoID = file.name;
            const videoRef = storageRef.child('video/' + videoID);
            const upload = videoRef.put(file);

            const newURLS = [];
            upload.then((snapshot) => {
                // console.log('uploaded a blob file!')
                snapshot.ref.getDownloadURL().then((url) => {
                    // console.log(url);
                    newURLS.push(url);
                });
            });

            upload.on('state_changed', function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                alert('Video did not upload successfully.')
            }, function () {
                alert('Video is done uploading. You may now click submit.')
            });

            // console.log(newURLS);
            this.setState({
                videos: newURLS
            })
        });

        // error handling
        this.player.on('error', (element, error) => {
            // console.warn(error);
        });

        this.player.on('deviceError', () => {
            // console.error('device error:', this.player.deviceErrorCode);
        });

    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // console.log('name', name);
        // console.log('value', value);
        this.setState({
            [name]: value
        })
    }

    onNext = (event) => {
        event.preventDefault();
        const firstForm = document.querySelector('.firstForm')
        const secondForm = document.querySelector('.secondForm')

        if (this.player.recordedData !== undefined) {
            firstForm.style.display = 'none';
            secondForm.style.display = 'flex';
        } else {
            alert(`No video recorded. Please try again.`);
        }
    }

    onSubmit = (event) => {
        const secondForm = document.querySelector('.secondForm')
        const commentButton = document.querySelector('.commentButton')

        console.log(this.player.recordedData !== undefined)
        console.log(this.state.guestName !== '')
        console.log(this.state.guestComment !== '')

        event.preventDefault();
        const nameToBeAdded = this.state.guestName;
        const commentToBeAdded = this.state.guestComment;
        const videoToBeAdded = this.state.videos;
        console.log(videoToBeAdded);

        const formatDate = function (date) {
            const time = new Date(date);
            const hh = time.getHours();
            const mm = time.getMinutes();
            let h = hh;
            let dd = "AM";
            if (h >= 12) {
                h = hh - 12;
                dd = "PM";
            }
            if (h === 0) {
                h = 12
            }
            return `${h}:${mm} ${dd}`
        }

        if (this.player.recordedData !== undefined
            && this.state.guestName !== ''
            && this.state.guestComment !== '') {
            firebase.database().ref().push({
                'name': nameToBeAdded,
                'comment': commentToBeAdded,
                'time': formatDate(Date.now()),
                'video': videoToBeAdded
            })
            this.setState({
                guestName: '',
                guestComment: '',
                timeStamp: '',
                video: this.player.record().reset()
            })
            secondForm.style.display = 'none';
            commentButton.style.display = 'block';
        } else {
            alert('Please record a video message and add your name and comment to our guestbook!')
        }

        // const videoComment = document.getElementsByClassName('videoComment')
        // console.log(videoComment);
        if (this.player.recordedData === undefined) {
            console.log('no video')
        } else {
            console.log('there is a video')
        }
    }


    render() {
        return (
            <div className="forms">
                <form onSubmit={this.onNext} className="firstForm">
                    <div className="recordVideo">
                        <p className="stepOne"><span className="color">Step 1:</span> Record a video message</p>
                        <div data-vjs-player>
                            <video id="myVideo" ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsInline></video>
                        </div>
                        <button type="next">Next</button>
                    </div>
                </form>
                <form onSubmit={this.onSubmit} className="secondForm">
                    <div className="inputs">
                        <p className="stepTwo"><span className="color">Step 2:</span> Write a comment and sign your name</p>
                        <label htmlFor="guestComment">Message to the newly weds:</label>
                        <textarea id="guestComment" name="guestComment" type="text" onChange={this.onChange} value={this.state.guestComment} />
                        <label htmlFor="guestName">Signed:</label>
                        <input id="guestName" name="guestName" type="text" onChange={this.onChange} value={this.state.guestName} />
                        <p className="stepThree"><span className="color">Step 3:</span> Submit</p>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;