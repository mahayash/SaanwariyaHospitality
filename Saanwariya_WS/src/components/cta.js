import React from 'react'
import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Link from 'gatsby-link'
import placesList from '../../content/ListOfVisitPlaces.json'

class CTA extends React.Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
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
              {/* <!-- CTA Slider --> */}
              <div className="col">
                <div className="cta_slider_container">
                  <div className="owl-carousel owl-theme cta_slider">
                    <Slider {...settings}>
                      {placesList.map((data, index) => (
                        <div
                          className="owl-item cta_item text-center"
                          key={index}
                        >
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

export default CTA

{
  /* <div className="owl-item cta_item text-center">
                      <div className="cta_title">Swaminarayan Temple</div>

                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          Read More<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">Mandvi Beach</div>
                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eu convallis tortor. Suspendisse potenti. In
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          Read More<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">White Rann</div>

                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eu convallis tortor. Suspendisse potenti. In
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          Read More<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">Black Hill</div>

                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eu convallis tortor. Suspendisse potenti. In
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          Read More<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">Narayan Sarovar</div>
                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eu convallis tortor. Suspendisse potenti. In
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          Read More<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                  */
}
