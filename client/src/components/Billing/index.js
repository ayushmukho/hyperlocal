import React from 'react'
import Navbar from '../LandingPage/Navbar/Navbar'
import Footer from '../LandingPage/Footer/Footer'
import { Grid } from '@material-ui/core'
import Addresses from './Addresses'
import OrderReview from './OrderReview'
import DiscountCode from './DiscountCode'
import CardPayment from './screens/MainScreen'
import './index.css'


function Index() {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid container direction='column' xs={12} md={6}>
          <Addresses />
          <div className='App'>
            <CardPayment />
          </div>
        </Grid>
        <Grid container direction='column' xs={12} md={6}>
          <OrderReview />
          <DiscountCode />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Index
