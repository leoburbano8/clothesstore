import React from 'react'
import Proteccion from '../img/proteccion.jpg'
import Modainfantil from '../img/moda-infantil.jpg'

export default function Slider() {
  return (
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-md-6 mb-4 mb-md-0 position-relative'>
          <img src={Modainfantil} alt='' className='img-fluid' />
          <div className='text-uppercase catexto1 position-absolute translate-middle-x'>
            Moda infantil
          </div>
        </div>
        <div className='col-md-6 mb-4 mb-md-0 position-relative'>
          <img src={Proteccion} alt='' className='img-fluid' />
          <div className='text-uppercase catexto2 position-absolute translate-middle-x'>
            Protección
          </div>
        </div>
      </div>
    </div>
  )
}
