import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const list = [
      {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
      },
      {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
      }
    ];

    this.state = {
      list,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="top-gutter">
          { this.state.list.map(item =>
            <div key={ item.objectID }>
              <span>
                <a href={ item.url }>{ item.title }</a>
              </span>
              <span>{ item.author }</span>
              <span>{ item.num_comments }</span>
              <span>{ item.points }</span>
              <span>
                <button onClick={ () =>  this.onDismiss(item.objectID) }>Dismiss</button>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
