import React from 'react'
import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import Link from 'gatsby-link'

const Home = () => (
  <div className="home">
    {/* <!-- Home Slider --> */}
    <div className="home_slider_container">
      <div className="owl-carousel owl-theme home_slider">
        {/* <!-- Slider Item Component--> */}
        <div className="owl-item home_slider_item">
          <div
            className="home_slider_background"
            style={{
              backgroundImage: `url(${require('../images/dessert_1.jpg')})`,
            }}
          />

          <div className="home_slider_content text-center">
            <div className="home_slider_content_inner">
              <h1>discover</h1>
              <h1>the Kutch</h1>
              <div className="button home_slider_button">
                <div className="button_bcg" />
                <Link to="/aboutkutch">
                  explore now<span />
                  <span />
                  <span />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
