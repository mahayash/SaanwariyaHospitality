import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/main_styles.module.css'
import bootstrapStyle from '../styles/bootstrap4/bootstrap.min.module.css'
import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import '../styles/responsive.css'
import '@fortawesome/react-fontawesome'

const Header = () => (
  <div>
    {/* <!-- Header --> */}

    <header className="header">
      {/* <!-- Top Bar --> */}

      <div className="top_bar">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-row">
              <div className="phone">+91 9638397591</div>
              <div className="social ml-auto" style={{ padding: '0px' }}>
                <ul className="social_list">
                  <li className="social_list_item">
                    <a href="#" style={{ display: 'none' }}>
                      <i className="fa fa-pinterest" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item">
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item" style={{ display: 'none' }}>
                    <a href="#">
                      <i className="fa fa-dribbble" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item" style={{ display: 'none' }}>
                    <a href="#">
                      <i className="fa fa-behance" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="social_list_item">
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Main Navigation --> */}

      <nav className="main_nav">
        <div className="container">
          <div className="row">
            <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
              <div className="logo_container">
                <div className="logo">
                  <Link to="/">Saanwariya Hospitality</Link>
                </div>
              </div>
              <div className="main_nav_container ml-auto">
                <ul
                  className="main_nav_list"
                  style={{ marginBottom: '0px', width: '100%' }}
                >
                  <li className="main_nav_item">
                    <Link to="/">home</Link>
                  </li>
                  <li className="main_nav_item">
                    <Link to="/aboutus">about us</Link>
                  </li>
                  <li className="main_nav_item">
                    <Link to="/aboutkutch">Rann Utsav</Link>
                  </li>
                  <li className="main_nav_item">
                    <a href="blog.html">Gallery</a>
                  </li>
                  <li className="main_nav_item">
                    <Link to="/contact">contact</Link>
                  </li>
                </ul>
              </div>

              <div className="content_search ml-lg-0 ml-auto" />

              <form id="search_form" className="search_form bez_1">
                <input type="search" className="search_content_input bez_1" />
              </form>

              <div className="hamburger" style={{ float: 'right' }}>
                <i className="fa fa-bars trans_200" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div className="menu trans_500">
      <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
        <div className="menu_close_container">
          <div className="menu_close" />
        </div>
        <div className="logo menu_logo">
          <a href="#">
            <img src="images/logo.png" alt="" />
          </a>
        </div>
        <ul>
          <li className="menu_item">
            <a href="#">home</a>
          </li>
          <li className="menu_item">
            <a href="about.html">about us</a>
          </li>
          <li className="menu_item">
            <a href="offers.html">offers</a>
          </li>
          <li className="menu_item">
            <a href="blog.html">news</a>
          </li>
          <li className="menu_item">
            <a href="contact.html">contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

// const Header = () => (
//   <div classNameName={styles.header}>
//     <div classNameName={styles.top_bar}>
//       <div classNameName={bootstrapStyle.container}>
//         <div classNameName={bootstrapStyle.row}>
//           <div
//             classNameName={`${bootstrapStyle.col} ${bootstrapStyle['d-flex']} ${
//               bootstrapStyle['flex-row']
//             }`}
//           >
//             <div classNameName={styles.phone}>+91 96383 97591</div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <nav classNameName="main_nav">
//       <div classNameName={bootstrapStyle.container}>
//         <div classNameName={bootstrapStyle.row}>
//           <div
//             classNameName={`${bootstrapStyle.col} ${
//               bootstrapStyle['main_nav_col']
//             } ${bootstrapStyle['d-flex']}
//            ${bootstrapStyle['flex-row']} ${bootstrapStyle['align-items-center']}
//            ${bootstrapStyle['justify-content-start']}`}
//           >
//             <div>
//               <div classNameName={styles.logo}>
//                 <a href="#">
//                   <div>Saanvariya Hospitality</div>
//                 </a>
//               </div>
//             </div>
//             <div
//               classNameName={`${styles.main_nav_container} ${
//                 bootstrapStyle['ml-auto']
//               }`}
//             >
//               <ul
//                 classNameName={bootstrapStyle.main_nav_list}
//                 style={{ width: '100%', marginBottom: '0px' }}
//               >
//                 <li classNameName={styles.main_nav_item}>
//                   <a href="#">home</a>
//                 </li>
//                 <li classNameName={styles.main_nav_item}>
//                   <a href="about.html">about us</a>
//                 </li>
//                 <li classNameName={styles.main_nav_item}>
//                   <a href="about.html">Rann Utsav</a>
//                 </li>
//                 <li classNameName={styles.main_nav_item}>
//                   <a href="about.html">Gallery</a>
//                 </li>
//                 <li classNameName={styles.main_nav_item}>
//                   <a href="contact.html">contact</a>
//                 </li>
//               </ul>
//             </div>

//             <div
//               classNameName={`${bootstrapStyle.content_search} ${
//                 bootstrapStyle['ml-lg-0']
//               }
//             ${bootstrapStyle['ml-auto']}`}
//             />
//             <div
//               id="search_form"
//               classNameName={`${styles.search_form} ${styles.bez_1}`}
//             >
//               <input
//                 type="search"
//                 classNameName={`${styles.search_content_input} ${styles.bez_1}`}
//               />
//             </div>

//             <div classNameName={styles.hamburger}>
//               <i
//                 classNameName={`${bootstrapStyle.fa} ${bootstrapStyle['fa-bars']} ${
//                   styles['trans_200']
//                 }`}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   </div>
// )

export default Header
