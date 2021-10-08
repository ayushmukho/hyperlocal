import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Background from './Background/Backgound'
import Seller from './Seller'
import Cards from './Cards'
import './styles.css'

const index = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <h1 className='cat'>CATEGORIES</h1>
      <div className='cc'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards /> 
        <Cards />
      </div>
      <Seller />
      <Footer />
    </div>
  )
}

export default index
