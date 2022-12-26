import React, { Fragment } from 'react'

import BannerImage from '../Assets/Images/meals.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <Fragment>
        <div className='Banner_Image'>
          <img src={BannerImage} alt='A table full of delicious food!'/>
        </div>
    </Fragment>
  )
}

export default Banner