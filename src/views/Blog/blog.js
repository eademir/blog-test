import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import BlogList from '../../components/blogList'

class BlogPage extends React.Component {

    static propTypes = {
      blog: PropTypes.array.isRequired
    };
    render() {
        return (
            <div>
                <h2>blog</h2>
                <BlogList/>
            </div>
        );
    }
}

const mapStateToProps = ({blog})=> {
    return{
        blog
    }
};

export default connect(mapStateToProps) (BlogPage)