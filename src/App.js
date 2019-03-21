import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import BlogPage from './views/Blog/blog'
import 'semantic-ui-css/semantic.min.css'
import {Container} from 'semantic-ui-react'
import Footer from './components/footer'
import Header from "./components/header";

class App extends Component {
  render() {
      return (
          <div>

              {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
          <Header/>
              <Container text>
                  <Route path={'/blogs'} component={BlogPage}/>
              </Container>
              <Footer/>
          </div>
      );
  }
}

export default App;
