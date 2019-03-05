import React from 'react'
import PropTypes from 'prop-types'

const BlogList = ({blog}) => {
    const empty = (
        <p>Yazı yok.</p>
    );
    const blogList = (
        <p>yazı var</p>
    );
  return(
      <div>
          {blog.length === 0 ? empty : blogList}
      </div>
  )
};

BlogList.propTypes = {
    blog: PropTypes.array.isRequired
};

export default BlogList