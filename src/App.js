import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import BlogPage from './views/Blog/blog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={'blogs'}>Blogs</Link>
          <Link to={'/'}>Main</Link>
          <Route path={'/'} component={App}/>
          <Route path={'/blogs'} component={BlogPage}/>
        </header>
      </div>
    );
  }
}

export default App;
