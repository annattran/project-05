(this["webpackJsonpproject-05-anna-tran"]=this["webpackJsonpproject-05-anna-tran"]||[]).push([[0],{18:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/leaf.59ff8a6c.png"},44:function(e,t,a){e.exports=a(73)},49:function(e,t,a){},53:function(e,t){},73:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),r=a(36),i=a.n(r),c=(a(49),a(5)),s=a(6),l=a(8),m=a(7),u=a(9),d=(a(18),a(23)),p=a.n(d);a(50),a(74);p.a.initializeApp({apiKey:"AIzaSyD4PAiUxCGZ58JoP9fkPlJ_yE4eVeKm4UM",authDomain:"project-05-f1231.firebaseapp.com",databaseURL:"https://project-05-f1231.firebaseio.com",projectId:"project-05-f1231",storageBucket:"project-05-f1231.appspot.com",messagingSenderId:"589380734853",appId:"1:589380734853:web:6f3cb4c64d4b7b86337eec"});var h=p.a,f=a(24),v=a.n(f),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).onComment=function(e){var t=document.querySelector(".firstForm"),a=document.querySelector(".commentButton");t.style.display="flex","flex"===t.style.display?a.style.display="none":a.style.display="block"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("img",{src:v.a,className:"left leaf",alt:"Green leaves in watercolor - positioned on the top left corner to frame the title."}),o.a.createElement("img",{src:v.a,className:"right leaf",alt:"Green leaves in watercolor - positioned on the bottom right corner to frame the title. "}),o.a.createElement("div",{className:"button"},o.a.createElement("button",{onClick:this.onComment,className:"commentButton"}," Add Comment")),o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"Jack \u2764 Jill"),o.a.createElement("h2",null,"November 28th 2019"),o.a.createElement("div",{className:"instructions"},o.a.createElement("p",null,"Record a video with your well wishes, something funny, words of advice, or maybe date night ideas. When we look back we'll be reminded of all the people who helped celebrate our special day."))))}}]),t}(n.Component),g=a(10),b=(a(52),a(16)),E=(a(72),a(22)),N=a.n(E),j=(a(65),a(66),a(41)),w=a(42),C=a(17),S=a.n(C),k=a(43),O=a.n(k),D=(a(71),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).onChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(g.a)({},a,n))},e.onNext=function(t){t.preventDefault();var a=document.querySelector(".firstForm"),n=document.querySelector(".secondForm");void 0!==e.player.recordedData?(a.style.display="none",n.style.display="flex"):S.a.fire("","No video recorded. Please try again.","warning")},e.onClose=function(t){var a=document.querySelector(".firstForm"),n=document.querySelector(".commentButton");void 0===e.player.recordedData?(a.style.display="none",n.style.display="block"):!0===window.confirm("You recorded a video but have not submitted. Clicking ok will erase your video.")&&(a.style.display="none",n.style.display="block",e.player.record().reset())},e.onSubmit=function(t){t.preventDefault();var a=e.state.guestName,n=e.state.guestComment,o=e.state.videos,r=document.querySelector(".secondForm"),i=document.querySelector(".commentButton");void 0!==e.player.recordedData&&""!==e.state.guestName&&""!==e.state.guestComment?(h.database().ref().push({name:a,comment:n,time:function(e){var t=new Date(e),a=t.getHours(),n=t.getMinutes(),o=a,r="AM",i=n;return o>=12&&(o=a-12,r="PM"),0===o&&(o=12),i<10&&(i="0"+n),"".concat(o,":").concat(i," ").concat(r)}(Date.now()),video:o}),e.setState({guestName:"",guestComment:"",timeStamp:"",video:e.player.record().reset()}),r.style.display="none",i.style.display="block"):S.a.fire("","One or more fields are empty.","warning")},e.state={guestName:"",guestComment:"",timeStamp:"",video:[]},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.player=Object(b.default)(this.videoNode,this.props,(function(){var e="Using video.js "+b.default.VERSION+" with videojs-record "+b.default.getPluginVersion("record")+" and recordrtc "+N.a.version;b.default.log(e)})),this.player.on("deviceReady",(function(){})),this.player.on("startRecord",(function(){})),this.player.on("finishRecord",(function(){S.a.fire("","Thank you for your video! Please wait until the video is done uploading before clicking submit!","info");var t=e.player.recordedData,a=h.storage().ref(),n=t.name,o=a.child("video/"+n).put(t),r=[];o.then((function(e){e.ref.getDownloadURL().then((function(e){r.push(e)}))})),o.on("state_changed",(function(e){e.bytesTransferred,e.totalBytes;switch(e.state){case h.storage.TaskState.PAUSED:case h.storage.TaskState.RUNNING:}}),(function(e){S.a.fire("","Video did not upload successfully.","error")}),(function(){S.a.fire("","Video is done uploading. You may now click submit.","success")})),e.setState({videos:r})})),this.player.on("error",(function(e,t){})),this.player.on("deviceError",(function(){})),O.a.init({duration:1200})}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"forms"},o.a.createElement("form",{onSubmit:this.onNext,className:"firstForm"},o.a.createElement(j.a,{icon:w.a,className:"close",onClick:this.onClose}),o.a.createElement("div",{className:"recordVideo"},o.a.createElement("p",{className:"stepOne"},o.a.createElement("span",{className:"color"},"Step 1:")," Record a video message"),o.a.createElement("div",{"data-vjs-player":!0},o.a.createElement("video",{id:"myVideo",ref:function(t){return e.videoNode=t},className:"video-js vjs-default-skin",playsInline:!0})),o.a.createElement("button",{type:"next"},"Next"))),o.a.createElement("form",{onSubmit:this.onSubmit,className:"secondForm"},o.a.createElement("div",{className:"inputs"},o.a.createElement("p",{className:"stepTwo"},o.a.createElement("span",{className:"color"},"Step 2:")," Write a comment and sign your name"),o.a.createElement("label",{htmlFor:"guestComment"},"Message to the newly weds:"),o.a.createElement("textarea",{id:"guestComment",name:"guestComment",type:"text",onChange:this.onChange,value:this.state.guestComment}),o.a.createElement("label",{htmlFor:"guestName"},"Signed:"),o.a.createElement("input",{id:"guestName",name:"guestName",type:"text",onChange:this.onChange,value:this.state.guestName}),o.a.createElement("p",{className:"stepThree"},o.a.createElement("span",{className:"color"},"Step 3:")," Submit"),o.a.createElement("button",{type:"submit"},"Submit"))))}}]),t}(n.Component)),x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("ul",{className:"commentsSection","data-aos":"zoom-in"},this.props.listItems.map((function(e,t){return o.a.createElement("li",{key:t,className:"commentCard"},o.a.createElement("div",{className:"videoComment"},o.a.createElement("video",{width:"320",height:"240",controls:!0},o.a.createElement("source",{src:e.videoURL,type:"video/webm"}))),o.a.createElement("div",{className:"writtenComment"},o.a.createElement("p",null,e.guestComment),o.a.createElement("p",null,"\u2014 ",e.guestName),o.a.createElement("p",{className:"timeStamp"},e.timeStamp)))})))}}]),t}(n.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("p",null,"Wedding Guestbook - Copyright \xa9 2019"))}}]),t}(n.Component),R=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={commentCards:[]},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var o in a){var r={uniqueID:o,guestName:t.child(o).child("name").val(),guestComment:t.child(o).child("comment").val(),timeStamp:t.child(o).child("time").val(),videoURL:t.child(o).child("video").child([0]).val()};n.push(r)}e.setState({commentCards:n})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(D,{controls:!0,width:320,height:240,fluid:!1,plugins:{record:{audio:!0,video:!0,maxLength:10,debug:!0}}}),o.a.createElement(x,{listItems:this.state.commentCards}),o.a.createElement(I,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.42080cc5.chunk.js.map