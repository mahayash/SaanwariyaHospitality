import React from 'react'
import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import testimonial from '../../content/Testimonial.json'

class Testimonial extends React.Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
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
      <div className="testimonials">
        <div className="test_border" />
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section_title">what our clients say about us</h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="test_slider_container">
                <div className="owl-carousel owl-theme test_slider">
                  <Slider {...settings}>
                    {testimonial.map((data, index) => (
                      <div className="owl-item" key={index}>
                        <div className="test_item">
                          <div className="test_image">
                            <img
                              src={require('../images/test_1.jpg')}
                              alt="https://unsplash.com/@anniegray"
                            />
                          </div>
                          <div className="test_icon">
                            <img
                              src={require('../images/backpack.png')}
                              alt=""
                            />
                          </div>
                          <div className="test_content_container">
                            <div className="test_content">
                              <div className="test_item_info">
                                <div className="test_name">{data.name}</div>
                                <div className="test_date">May 24, 2017</div>
                              </div>
                              <div className="test_quote_title">
                                {data.title}
                              </div>
                              <p className="test_quote_text">{data.subTitle}</p>
                            </div>
                          </div>
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
    )
  }
}

export default Testimonial

{
  /* <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image">
                          <img
                            src={require('../images/test_2.jpg')}
                            alt="https://unsplash.com/@tschax"
                          />
                        </div>
                        <div className="test_icon">
                          <img src={require('../images/island_t.png')} alt="" />
                        </div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">carla smith</div>
                              <div className="test_date">May 24, 2017</div>
                            </div>
                            <div className="test_quote_title">
                              " Best holliday ever "
                            </div>
                            <p className="test_quote_text">
                              Nullam eu convallis tortor. Suspendisse potenti.
                              In faucibus massa arcu, vitae cursus mi hendrerit
                              nec.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="owl-item">
                      <div className="test_item">
                        <div className="test_image">
                          <img
                            src={require('../images/test_3.jpg')}
                            alt="https://unsplash.com/@seefromthesky"
                          />
                        </div>
                        <div className="test_icon">
                          <img src={require('../images/kayak.png')} alt="" />
                        </div>
                        <div className="test_content_container">
                          <div className="test_content">
                            <div className="test_item_info">
                              <div className="test_name">carla smith</div>
                              <div className="test_date">May 24, 2017</div>
                            </div>
                            <div className="test_quote_title">
                              " Best holliday ever "
                            </div>
                            <p className="test_quote_text">
                              Nullam eu convallis tortor. Suspendisse potenti.
                              In faucibus massa arcu, vitae cursus mi hendrerit
                              nec.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                   */
}
