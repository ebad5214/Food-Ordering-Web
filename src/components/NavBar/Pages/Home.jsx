import React, { Fragment } from 'react'
import Banner from '../../Banner/Banner'
// import Banner2 from '../../Banner/Banner2'
import CarouselWeb from '../../Carousel/CarouselWeb'
import MealsSummary from '../../MealsSummary/MealsSummary'



const Home = () => {
  return (
    <Fragment>
      <div style={{overflow: 'hidden'}}>
      <CarouselWeb />
      <Banner />
      <MealsSummary />
      {/* <Banner2 /> */}
      </div>
    </Fragment>
  )
}

export default Home
