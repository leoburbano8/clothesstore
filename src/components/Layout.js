import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Footer from './Footer'

function Layout(props) {
  return (
    <>
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
