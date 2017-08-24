import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <div className="panel panel-default">
          <div className="panel-body">
            Hello I am a post
          </div>
        </div>
        <div className ="panel panel-default post-editor">
          <div className="panel-body">
            <textarea className="form-control post-editor-input"/>
            <button className="btn btn-success post-editor-button"> Post </button>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
