import React from 'react'
import Slide1 from '../img/slide_01.jpg'
import Slide2 from '../img/slide_02.jpg'

export default function Slider() {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to={0}
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        />
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to={1}
          aria-label='Slide 2'
        />
      </div>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={Slide1} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={Slide2} className='d-block w-100' alt='...' />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}
