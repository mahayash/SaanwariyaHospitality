import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/main_styles.module.css'
import bootstrapStyle from '../styles/bootstrap4/bootstrap.min.module.css'

const Header = () => (
  <div className={styles.header}>
    <div className={styles.top_bar}>
      <div className={bootstrapStyle.container}>
        <div className={bootstrapStyle.row}>
          <div
            className={`${bootstrapStyle.col} ${bootstrapStyle['d-flex']} ${
              bootstrapStyle['flex-row']
            }`}
          >
            <div className={styles.phone}>+91 96383 97591</div>
            {/* <div className={styles.social}>
              <ul className={styles.social_list}>
                <li className={styles.social_list_item}>
                  <a href="#">
                    <i
                      className={`${bootstrapStyle.fa} ${
                        bootstrapStyle['fa-pinterest']
                      } ${(bootstrapStyle['aria-hidden'] = 'true')}`}
                    />
                  </a>
                </li>
                <li className={styles.social_list_item}>
                  <a href="#">
                    <i
                      className={`${bootstrapStyle.fa} ${
                        bootstrapStyle['fa-facebook']
                      } ${(bootstrapStyle['aria-hidden'] = 'true')}`}
                    />
                  </a>
                </li>
                <li className={styles.social_list_item}>
                  <a href="#">
                    <i
                      className={`${bootstrapStyle.fa} ${
                        bootstrapStyle['fa-twitter']
                      } 
                     ${(bootstrapStyle['aria-hidden'] = 'true')}`}
                    />
                  </a>
                </li>
                <li className={styles.social_list_item}>
                  <a href="#">
                    <i
                      className={`${bootstrapStyle.fa} ${
                        bootstrapStyle['fa-dribbble']
                      }
                     ${(bootstrapStyle['aria-hidden'] = 'true')}`}
                    />
                  </a>
                </li>
                <li className={styles.social_list_item}>
                  <a href="#">
                    <i
                      className={`${bootstrapStyle.fa} ${
                        bootstrapStyle['fa-behance']
                      }
                     ${(bootstrapStyle['aria-hidden'] = 'true')}`}
                    />
                  </a>
                </li>
                <li className={styles.social_list_item}>
                  <a href="#">
                    <i
                      className={`${bootstrapStyle.fa} ${
                        bootstrapStyle['fa-linkedin']
                      } ${(bootstrapStyle['aria-hidden'] = 'true')}`}
                    />
                  </a>
                </li>
              </ul>
            </div> */}
            <div className={`${styles.user_box} ${bootstrapStyle['ml-auto']}`}>
              <div
                className={`${styles.user_box_login} ${styles.user_box_link}`}
              >
                <a href="#">login</a>
              </div>
              <div
                className={`${styles.user_box_register} ${
                  styles.user_box_link
                }`}
              >
                <a href="#">register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav className="main_nav">
      <div className={bootstrapStyle.container}>
        <div className={bootstrapStyle.row}>
          <div
            className={`${bootstrapStyle.col} ${
              bootstrapStyle['main_nav_col']
            } ${bootstrapStyle['d-flex']}
           ${bootstrapStyle['flex-row']} ${bootstrapStyle['align-items-center']}
           ${bootstrapStyle['justify-content-start']}`}
          >
            <div className={styles.logo_container}>
              <div className={styles.logo}>
                <a href="#">
                  <img src="images/logo.png" alt="" />travelix
                </a>
              </div>
            </div>
            <div
              className={`${styles.main_nav_container} ${
                bootstrapStyle['ml-auto']
              }`}
            >
              <ul className={bootstrapStyle.main_nav_list}>
                <li className={styles.main_nav_item}>
                  <a href="#">home</a>
                </li>
                <li className={styles.main_nav_item}>
                  <a href="about.html">about us</a>
                </li>
                <li className={styles.main_nav_item}>
                  <a href="offers.html">offers</a>
                </li>
                <li className={styles.main_nav_item}>
                  <a href="blog.html">news</a>
                </li>
                <li className={styles.main_nav_item}>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
            </div>

            <div
              className={`${bootstrapStyle.content_search} ${
                bootstrapStyle['ml-lg-0']
              } 
            ${bootstrapStyle['ml-auto']}`}
            />
            <div
              id="search_form"
              className={`${styles.search_form} ${styles.bez_1}`}
            >
              <input
                type="search"
                className={`${styles.search_content_input} ${styles.bez_1}`}
              />
            </div>

            <div className={styles.hamburger}>
              <i
                className={`${bootstrapStyle.fa} ${bootstrapStyle['fa-bars']} ${
                  styles['trans_200']
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Header

{
  /* <div className="content_search ml-lg-0 ml-auto">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							width="17px" height="17px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
								<g>
									<g>
										<g>
											<path className="mag_glass" fill="#FFFFFF" d="M78.438,216.78c0,57.906,22.55,112.343,63.493,153.287c40.945,40.944,95.383,63.494,153.287,63.494
											s112.344-22.55,153.287-63.494C489.451,329.123,512,274.686,512,216.78c0-57.904-22.549-112.342-63.494-153.286
											C407.563,22.549,353.124,0,295.219,0c-57.904,0-112.342,22.549-153.287,63.494C100.988,104.438,78.439,158.876,78.438,216.78z
											M119.804,216.78c0-96.725,78.69-175.416,175.415-175.416s175.418,78.691,175.418,175.416
											c0,96.725-78.691,175.416-175.416,175.416C198.495,392.195,119.804,313.505,119.804,216.78z"/>
										</g>
									</g>
									<g>
										<g>
											<path className="mag_glass" fill="#FFFFFF" d="M6.057,505.942c4.038,4.039,9.332,6.058,14.625,6.058s10.587-2.019,14.625-6.058L171.268,369.98
											c8.076-8.076,8.076-21.172,0-29.248c-8.076-8.078-21.172-8.078-29.249,0L6.057,476.693
											C-2.019,484.77-2.019,497.865,6.057,505.942z"/>
										</g>
									</g>
								</g>
							</svg>
						</div> */
}
