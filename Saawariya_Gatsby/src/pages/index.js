import React from 'react'
import Link from 'gatsby-link'
import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'
import Home from '../components/home'
import Search from '../components/search'
import Intro from '../components/intro'
import PlaceToVisit from '../components/placeToVisit'
import Offers from '../components/offers'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'

// this is the Main page
const IndexPage = () => (
  <div>
    {/* <!-- Home --> */}
    <Home />

    {/* <!-- Search Component --> */}
    <Search />

    {/* <!-- Intro Component--> */}
    <Intro />

    {/* <!-- CTA --> */}
    <PlaceToVisit />

    {/* <!-- Offers --> */}
    <Offers />

    {/* <!-- Testimonials --> */}
    <Testimonials />

    {/* <!-- Contact --> */}
    <Contact />
  </div>
)

export default IndexPage
