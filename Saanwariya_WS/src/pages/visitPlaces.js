import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  if (data != undefined) {
    const post = data.markdownRemark
    return (
      <div className="container">
        <div className="row">
          <div className="col" style={{ marginTop: '200px' }}>
            <h1 style={{ color: 'gray' }}>{post.frontmatter.title}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Link to="/">Back to Home</Link>
        <br />
        <br />
      </div>
    )
  } else {
    return null
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
