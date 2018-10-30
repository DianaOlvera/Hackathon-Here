import React, { Component } from 'react';
import fire from './component/Fire';
import Login from './component/Login';
import Home from './component/Home';
//import NavbarPage from './component/Navbar';
//import Notify from './component/Notify';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        //this.props.history.push('/orders')
      } else{
        this.setState({ user: null });
        localStorage.removeItem('user');
        //this.props.history.replace('/login')
      }
    });
  }


  render() {
    return (
      <div className="App">
      {this.state.user ? (<Login/>) : (<Home/>)}
      {/* <Notify/> */}
      </div>
    );
  }
}

export default App;
