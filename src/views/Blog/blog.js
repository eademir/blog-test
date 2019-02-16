import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class BlogPage extends React.Component {
    static propTypes = {
      blog: PropTypes.array.isRequired
    };
    render() {
        return (
            <div>
                <h2>blog</h2>
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