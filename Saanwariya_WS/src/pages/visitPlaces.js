import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import styled from 'styled-components'
import X1 from '../images/X1.jpg'

export default ({ data }) => {
  if (data != undefined) {
    const post = data.markdownRemark
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true,
      centerMode: true,
      easing: 'linear',
    }
    const card = styled.div`
      margin-top: 20px;
    `
    const imgCard = styled.img`
      width: 450px;
      margintop: 25px;
      height: 250px;
    `
    const imgCardStyle = { width: '450px', height: '250px', marginTop: '27px' }
    const paragraph = styled.p`
      color: black;
    `

    return (
      <div className="container">
        <div>
          <div className="row">
            <div className="col" style={{ marginTop: '200px' }}>
              <h1 style={{ color: '#212121' }}>{post.frontmatter.title}</h1>
            </div>
          </div>
          <div style={{ background: '#fa9e1b' }}>
            <Slider {...settings}>
              <card>
                <img
                  src={'http://rannutsav.com/images/zoom/1.jpg'}
                  style={imgCardStyle}
                />
              </card>
              <card>
                <img
                  src={'http://rannutsav.com/images/zoom/2.jpg'}
                  style={imgCardStyle}
                />
              </card>
              <card>
                <img
                  src={'http://rannutsav.com/images/zoom/3.jpg'}
                  style={imgCardStyle}
                />
              </card>
              <card>
                <img
                  src={'http://rannutsav.com/images/zoom/4.jpg'}
                  style={imgCardStyle}
                />
              </card>
              <card>
                <img
                  src={'http://rannutsav.com/images/zoom/5.jpg'}
                  style={imgCardStyle}
                />
              </card>
            </Slider>
          </div>
          <div style={{ marginTop: '25px', color: 'black' }}>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
              className="formattedmd"
            />
          </div>
          <Link to="/">Back to Home</Link>
          <br />
          <br />
        </div>
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
