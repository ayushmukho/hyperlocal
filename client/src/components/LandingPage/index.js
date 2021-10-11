import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Background from './Background/Backgound'
import SellerCard from './Seller'
import Cards from './Cards'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import './styles.css'

const useStyles = makeStyles({
  cat: {
    fontSize: '42px',
    marginTop: '100px',
  },

  title: {
    marginLeft: '50px',
  },

  title2: {
    fontSize: '16px',
    marginBottom: '60px',
    marginLeft: '50px',
  },
})
export default function Index() {
  const categoriesData = useSelector((state) => state.getAllCategories)
  const { categories } = categoriesData
  const sellersData = useSelector((state) => state.getAllSellers)
  const { sellers } = sellersData
  const classes = useStyles()
  const colours = [
    '#c3f3c6',
    '#ccffea',
    '#ffcdcd',
    '#cfdcd8',
    '#f1e1f8',
    '#e7e3fe',
  ]
  const sellersPerPage = 4
  let arrayForHoldingSellers = []
  const [sellersToShow, setSellersToShow] = useState([])
  const [next, setNext] = useState(4)

  const loopWithSlice = (start, end) => {
    const slicedSellers = sellers.slice(start, end)
    arrayForHoldingSellers = [...arrayForHoldingSellers, ...slicedSellers]
    setSellersToShow(arrayForHoldingSellers)
  }

  useEffect(() => {
    loopWithSlice(0, sellersPerPage)
    // eslint-disable-next-line
  }, [sellers])

  const handleShowMoreSellers = () => {
    if (sellersToShow.length < 4) {
      loopWithSlice(0, 0 + sellersPerPage)
      setNext(0 + sellersPerPage)
    } else {
      loopWithSlice(next, next + sellersPerPage)
      setNext(next + sellersPerPage)
    }
  }
  return (
    <div>
      <Navbar />
      <Background />
      <Typography className={classes.cat}>
        {' '}
        <span className={classes.title}>CATEGORIES</span>
      </Typography>
      <Typography
        className={classes.title2}
        variant='body2'
        color='textSecondary'
        component='p'
      >
        Multiple categories to choose your products from.
      </Typography>
      <div className='cc'>
        <Grid container spacing={1}>
          {categories.map((category, i) => (
            <Grid
              item
              lg={3}
              md={6}
              xs={12}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
              key={i}
            >
              <Cards
                name={category.name}
                img={category.image}
                description={category.description}
                color={colours[i]}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Typography className={classes.cat}>
        {' '}
        <span className={classes.title}>VENDORS</span>
      </Typography>
      <Typography
        className={classes.title2}
        variant='body2'
        color='textSecondary'
        component='p'
      >
        Multiple vendors to buy your products from.
      </Typography>
      <Grid container spacing={1}>
        {sellersToShow.map((seller, i) => (
          <Grid item lg={3} md={6} xs={12} key={i}>
            <SellerCard name={seller.shop.name} img={seller.shop.icon} />
          </Grid>
        ))}
      </Grid>

      <button className='button' onClick={handleShowMoreSellers}>
        <span>Show More </span>
      </button>

      <Footer />
    </div>
  )
}
