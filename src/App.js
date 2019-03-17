import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import BlogPage from './views/Blog/blog'
import 'semantic-ui-css/semantic.min.css'
import {Container, Image, Menu} from 'semantic-ui-react'
import Footer from './components/footer'
import { menuStyle, fixedMenuStyle} from "./helper/stylehelper";

class App extends Component {

    state = {
        menuFixed: null,
        overlayFixed: false,
    };

  render() {
      const { menuFixed } = this.state;
      return (
          <div>

              {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
              <Menu
                  borderless
                  fixed={menuFixed ? 'top' : undefined}
                  style={menuFixed ? fixedMenuStyle : menuStyle}
              >
                  <Container text>
                      <Menu.Item>
                          <Image size='mini' src='/logo.png'/>
                      </Menu.Item>
                      <Menu.Item header>blog-test</Menu.Item>
                      <Menu.Item as={Link} to='/blogs'>
                          Blogs
                      </Menu.Item>
                      <Menu.Item as='a'>Add Blog</Menu.Item>

                  </Container>
              </Menu>

              <Container text>
                  <Route path={'/blogs'} component={BlogPage}/>
                  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis quis tenetur. Commodi
                      corporis debitis delectus eius error esse incidunt, numquam quas, quidem, reiciendis repellat
                      saepe
                      sapiente temporibus ullam vero.
                  </div>
                  <div>Aliquam exercitationem mollitia perferendis? Alias aspernatur at debitis deserunt ducimus, ea eos
                      et
                      facere facilis, impedit ipsam ipsum magnam, molestiae nisi non praesentium qui repudiandae ut vel
                      voluptatum! Eius, placeat?
                  </div>
                  <div>Accusantium, doloribus, praesentium! Cumque, quibusdam, ut! Accusamus alias assumenda, deleniti
                      dolorum enim laboriosam minus nisi odit placeat provident recusandae reiciendis repellendus velit
                      veniam voluptatum! Corporis dignissimos perferendis repellat rerum ut.
                  </div>
                  <div>Beatae deserunt dignissimos excepturi id iure nemo nihil, numquam quasi sequi veniam. Ad
                      consequuntur
                      deserunt dolor earum explicabo fuga impedit ipsam laudantium maxime perferendis perspiciatis
                      quibusdam
                      similique totam, voluptatem voluptatibus.
                  </div>
                  <div>Debitis deserunt enim magni nam odit quis sint? Ab animi aperiam beatae, consequuntur cum
                      cupiditate
                      dicta dolores earum eius eligendi hic labore mollitia nam, provident quibusdam tempora tenetur
                      veniam
                      vitae!
                  </div>
                  <div>Aperiam commodi consectetur dicta doloremque eaque exercitationem ipsam laborum nemo, nulla
                      pariatur
                      quia quibusdam quisquam, recusandae tenetur voluptatibus! Aspernatur distinctio eveniet ex illo
                      nulla
                      obcaecati optio saepe similique tempore vel?
                  </div>
                  <div>Doloremque non provident quae tempora tempore temporibus! Asperiores, distinctio laudantium neque
                      officia quae reiciendis vitae! Aliquam animi commodi delectus dicta ea enim facere itaque maxime
                      perspiciatis quo. Facere in, molestiae.
                  </div>
                  <div>Aperiam, architecto aut commodi earum explicabo harum itaque maxime minima molestiae nesciunt
                      nisi
                      officia praesentium quos repellat velit! Aperiam dolores esse eveniet illo in maxime molestiae
                      molestias odit quibusdam tenetur.
                  </div>
                  <div>Doloribus, earum incidunt itaque nesciunt quasi ratione ullam veritatis vero? Dolorum illo
                      impedit
                      iure, iusto maiores minus molestias nihil quis quod ratione rerum sapiente tempore vero. Ad maxime
                      nulla quos!
                  </div>
                  <div>Cum doloremque, eveniet explicabo illo in maiores mollitia provident, quae quia quibusdam quis
                      similique sunt tempore temporibus, voluptate? Dolorem ea earum fugit ipsam officia placeat
                      provident
                      similique. Dolorem, fuga, repellendus?
                  </div>
              </Container>
              <Footer/>
          </div>
      );
  }
}

export default App;
