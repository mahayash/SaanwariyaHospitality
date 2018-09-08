import React from 'react'
import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
      <div className="cta">
        <div
          className="cta_background"
          style={{ backgroundImage: 'url(images/cta.jpg)' }}
        />

        <div className="container">
          <div className="row">
            <div className="col">
              {/* <!-- CTA Slider --> */}

              <div className="cta_slider_container">
                <div className="owl-carousel owl-theme cta_slider">
                  <Slider {...settings}>
                    {/* <!-- CTA Slider Item --> */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">
                        Vijay Vilas &nbsp;&nbsp; (Mandvi)
                      </div>

                      <p className="cta_text">
                        {
                          '1. We will show image of the place here, 2. 50 words description, 3. Read more'
                        }
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

                    {/* <!-- CTA Slider Item --> */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">Swaminarayan Temple</div>

                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          book now<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>

                    {/* <!-- CTA Slider Item --> */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">Mandvi Beach</div>
                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eu convallis tortor. Suspendisse potenti. In
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          book now<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>

                    {/* <!-- CTA Slider Item --> */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">White Rann</div>

                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eu convallis tortor. Suspendisse potenti. In
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          book now<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>

                    {/* <!-- CTA Slider Item --> */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">Black Hill</div>

                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eu convallis tortor. Suspendisse potenti. In
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          book now<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>

                    {/* <!-- CTA Slider Item --> */}
                    <div className="owl-item cta_item text-center">
                      <div className="cta_title">Narayan Sarovar</div>
                      <p className="cta_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam eu convallis tortor. Suspendisse potenti. In
                      </p>
                      <div className="button cta_button">
                        <div className="button_bcg" />
                        <a href="#">
                          book now<span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
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

export default CTA
