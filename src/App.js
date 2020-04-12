import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './container/LoginForm'

function App() {
  return (
    <div className="App">
      <div className="login-area">
        <div className="login-title">欢迎登录</div>
        <Form />
      </div>
    </div>
  );
}

export default App;
