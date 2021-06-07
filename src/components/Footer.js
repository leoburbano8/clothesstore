import React, {Component} from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className='footer-sitio pt-3 mt-5'>
          <div className='container'>
            <div className='row pt-4'>
              <div className='col-md-4 d-none d-md-block'>
                <h4 className='text-uppercase'>Políticas</h4>
                <p>Políticas de privacidad</p>
                <p>Políticas de cambios</p>
                <p>Políticas de envío</p>
                <p>Terminos y condiciones</p>
                <p>Responsabilidad social</p>
              </div>
              <div className='col-md-4 d-none d-md-block'>
                <h4 className='text-uppercase'>Sobre nosotros</h4>
                <p>Encuentra tu tienda</p>
                <p>Contáctanos</p>
                <p>Trabajo con nosotros</p>
              </div>
              <div
                className='accordion accordion-flush d-block d-md-none'
                id='footermov'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='flush-headingOne'>
                    <button
                      className='accordion-button collapsed text-uppercase'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseOne'
                      aria-expanded='false'
                      aria-controls='flush-collapseOne'
                    >
                      Políticas
                    </button>
                  </h2>
                  <div
                    id='flush-collapseOne'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingOne'
                    data-bs-parent='#footermov'
                  >
                    <div className='accordion-body'>
                      <p>Políticas de privacidad</p>
                      <p>Políticas de cambios</p>
                      <p>Políticas de envío</p>
                      <p>Terminos y condiciones</p>
                      <p>Responsabilidad social</p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='flush-headingTwo'>
                    <button
                      className='accordion-button collapsed text-uppercase'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseTwo'
                      aria-expanded='false'
                      aria-controls='flush-collapseTwo'
                    >
                      Sobre nosotros
                    </button>
                  </h2>
                  <div
                    id='flush-collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingTwo'
                    data-bs-parent='#footermov'
                  >
                    <div className='accordion-body'>
                      <p>Encuentra tu tienda</p>
                      <p>Contáctanos</p>
                      <p>Trabajo con nosotros</p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='flush-headingThree'>
                    <button
                      className='accordion-button collapsed text-uppercase'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseThree'
                      aria-expanded='false'
                      aria-controls='flush-collapseThree'
                    >
                      Metodos de pago
                    </button>
                  </h2>
                  <div
                    id='flush-collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingThree'
                    data-bs-parent='#footermov'
                  >
                    <div className='accordion-body'>
                      <p>Pagos en linea</p>
                      <p>Pago contraentrega</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center'>
                <h4 className='text-uppercase'>Síguenos en:</h4>
                <nav className='sociales text-center'>
                  <ul>
                    <li>
                      <a href='http://facebook.com'>
                        <FaFacebook className='socialicon' />
                        <span className='sr-only'>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href='http://twitter.com'>
                        <FaTwitter className='socialicon' />
                        <span className='sr-only'>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href='http://instagram.com'>
                        <FaInstagram className='socialicon' />
                        <span className='sr-only'>Instagram</span>
                      </a>
                    </li>

                    <li>
                      <a href='http://youtube.com'>
                        <FaYoutube className='socialicon' />
                        <span className='sr-only'>YouTube</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*Col-md-4*/}

              <hr className='w-100' />
              <p className='text-center copyright w-100'>
                ClothesStore - 2021 Desarrollado por:{' '}
                <a href='https://mlisoftware.tech'>MLI Software</a>{' '}
              </p>
            </div>
            {/*row*/}
          </div>
          {/*container*/}
        </footer>
      </>
    )
  }
}

export default Footer
