import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import BlogPage from './views/Blog/blog'
import 'semantic-ui-css/semantic.min.css'
import {Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility,} from 'semantic-ui-react'
import { menuStyle, fixedMenuStyle} from "./helper/stylehelper";

class App extends Component {

    state = {
        menuFixed: false,
        overlayFixed: false,
    };

    stickTopMenu = () => this.setState({ menuFixed: true });

    unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
      const { menuFixed, overlayFixed, overlayRect } = this.state;
    return (
      <div>

          {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
          <Visibility
              onBottomPassed={this.stickTopMenu}
              onBottomVisible={this.unStickTopMenu}
              once={false}
          >
              <Menu
                  borderless
                  fixed={menuFixed ? 'top' : undefined}
                  style={menuFixed ? fixedMenuStyle : menuStyle}
              >
                  <Container text>
                      <Menu.Item>
                          <Image size='mini' src='/logo.png' />
                      </Menu.Item>
                      <Menu.Item header>blog-test</Menu.Item>
                      <Menu.Item as='a'>
                          <Link to={'blogs'}>Blogs</Link>
                      </Menu.Item>
                      <Menu.Item as='a'>Add Blog</Menu.Item>

                  </Container>
              </Menu>
          </Visibility>

          <Container text>
              <Route path={'/blogs'} component={BlogPage}/>

          </Container>

          <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
              <Container textAlign='center'>
                  <Grid columns={4} divided stackable inverted>
                      <Grid.Row>
                          <Grid.Column>
                              <Header inverted as='h4' content='Group 1' />
                              <List link inverted>
                                  <List.Item as='a'>Link One</List.Item>
                                  <List.Item as='a'>Link Two</List.Item>
                                  <List.Item as='a'>Link Three</List.Item>
                                  <List.Item as='a'>Link Four</List.Item>
                              </List>
                          </Grid.Column>
                          <Grid.Column>
                              <Header inverted as='h4' content='Group 2' />
                              <List link inverted>
                                  <List.Item as='a'>Link One</List.Item>
                                  <List.Item as='a'>Link Two</List.Item>
                                  <List.Item as='a'>Link Three</List.Item>
                                  <List.Item as='a'>Link Four</List.Item>
                              </List>
                          </Grid.Column>
                          <Grid.Column>
                              <Header inverted as='h4' content='Group 3' />
                              <List link inverted>
                                  <List.Item as='a'>Link One</List.Item>
                                  <List.Item as='a'>Link Two</List.Item>
                                  <List.Item as='a'>Link Three</List.Item>
                                  <List.Item as='a'>Link Four</List.Item>
                              </List>
                          </Grid.Column>
                          <Grid.Column>
                              <Header inverted as='h4' content='Footer Header' />
                              <p>
                                  Extra space for a call to action inside the footer that could help re-engage
                                  users.
                              </p>
                          </Grid.Column>
                      </Grid.Row>
                  </Grid>
                  <Divider inverted section />
                  <Image src='/logo.png' centered size='mini' />
                  <List horizontal inverted divided link size='small'>
                      <List.Item as='a' href='#'>
                          Site Map
                      </List.Item>
                      <List.Item as='a' href='#'>
                          Contact Us
                      </List.Item>
                      <List.Item as='a' href='#'>
                          Terms and Conditions
                      </List.Item>
                      <List.Item as='a' href='#'>
                          Privacy Policy
                      </List.Item>
                  </List>
              </Container>
          </Segment>
      </div>
    );
  }
}

export default App;
