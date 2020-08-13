import React from 'react';
import User from "./components/User"
import Error from "./components/Error"
import Loadding from "./components/Loadding"
import Form from "./components/Form"

import './App.css';

//this is just a test 

import {axiosCall} from "./store/githubUsers"

import store from "./store/store"

const axiosGetter = () => {
  store.dispatch(axiosCall())
  
}

function App() {
  

  return (
    <div className="App">
      <Form  />
      {/* <button onClick={axiosGetter}> click on me</button>  */}
      <Loadding />
      <User />
      <Error />
    </div>
  );
}

export default App;
