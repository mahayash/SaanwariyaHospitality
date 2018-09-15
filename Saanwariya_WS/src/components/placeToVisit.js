import React from 'react'
import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'gatsby-link'
import placesList from '../../content/ListOfVisitPlaces.json'

class PlaceToVisit extends React.Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    }

    return (
      <div>
        <div className="cta">
          <h1
            className="text-center"
            style={{ color: 'white', textTransform: 'uppercase' }}
          >
            Places to Visit
          </h1>
          <div className="container">
            <div className="row">
              {/* <!-- Place to visit Slider --> */}
              <div className="col">
                <div className="cta_slider_container">
                  <div className="owl-carousel owl-theme cta_slider">
                    <Slider {...settings}>
                      {placesList.map((data, index) => (
                        <div className="cta_item text-center" key={index}>
                          <div className="cta_title">{data.title}</div>
                          <img
                            src={`${data.imageUrl}`}
                            style={{
                              display: 'inline',
                              marginTop: '20px',
                              height: '250px',
                            }}
                          />

                          <div className="button cta_button">
                            <div className="button_bcg" />
                            <Link to={data.link}>
                              Read More<span />
                              <span />
                              <span />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaceToVisit
