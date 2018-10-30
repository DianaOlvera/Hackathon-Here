// import React, {Component} from 'react';
// import {Button} from 'mdbreact';

// class Notify extends Component{
//     constructor(props){
//     super(props);
//     this.state={

//     };
//     this.notification = this.notification.bind(this);
//     }


// notification(){
// let express = require('express');
// let app = express();
// const accountSid = 'AC007a6122fe849ef5bcb94e0eb70c3bf5';
// const authToken = '3a203c551580b27ba5b224b938f4f1a0';
// const client = require('twilio')(accountSid, authToken);

// app.get('/',  (req, res) =>{
//   console.log("En la ruta")
//   client.messages
//       .create({
//         body: 'Notificacion de TravelHERE',
//         from: 'whatsapp:+14155238886',
//         to: 'whatsapp:+5215559650719'
//        })
//       .then(message => console.log(message.sid)).
//       done()
//   res.send('Hello World!');
// });
// app.listen(3000,  ()=> {
//   console.log("Server runing on port 3000")

// });
// }


// render(){
//     return(
//         <Button className="btn btn-dark" type="submit" onClick={this.notification}>Login</Button>

//     )
// }
// }
// export default Notify;

/////////////////

// import React, {Component} from 'react';
// import firebase from



// class Notify extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             user:null,
//             name:""
//     };
//     this.sendnotification = this.sendnotification.bind(this);
   
//         }



//     sendnotification(){
//         e.preventDefault();

//         const notificationmessage= FIREBASEDATABASE.ref('./Notify').push({
//             user: FIREBASE_AUTH.currentUser.displayName,
//             message:notificationmessage,
//             userProfileImg:  FIREBASE_AUTH.currentUser.photoURL
//         }).then(()=>{

//         })
//     }
    

//     render(){
//         return(
//             <form id='send-notification-form'>
//             <label for='notification-message' class='sr-only'>Notification message</label>
//             <textarea id='notification-message' placeholder='escribe el mensaje' maxlength='40'></textarea>
//             <button type='submit' onClick='' aria-label='send'></button>
//             </form>
//         )
//     }

// }

// export default Notify;
