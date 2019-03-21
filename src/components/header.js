import React, {Component} from 'react';
import {fixedMenuStyle, menuStyle} from "../helper/stylehelper";
import {Container, Image, Menu, Visibility} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    };
    stickTopMenu = () => this.setState({ menuFixed: true })
    unStickTopMenu = () => this.setState({ menuFixed: false })
    render() {
        const { menuFixed } = this.state;
        return (
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
                            <Image size='mini' src='/logo.png'/>
                        </Menu.Item>
                        <Menu.Item header>blog-test</Menu.Item>
                        <Menu.Item as={Link} to='/blogs'>
                            Blogs
                        </Menu.Item>
                        <Menu.Item as='a'>Add Blog</Menu.Item>

                    </Container>
                </Menu>
            </Visibility>
                );
    }
}

export default Header;