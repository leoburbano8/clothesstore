import React, {Component, useState} from 'react'
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from 'react-icons/ai'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <div className='row py-2'>
            <div className='col-lg-4 pt-2 col-12 text-center'>
              <a className='text-uppercase text-decoration-none marca' href='/'>
                CLOTHESSTORE
              </a>
            </div>
            <div className='col-lg-4 pt-2 col-10 d-block '>
              <form>
                <input
                  className='txtbuscar py-2'
                  type='text'
                  placeholder='Buscar producto aqui'
                ></input>
                <Link to='/resultados' className='btnbuscar py-2'>
                  <AiOutlineSearch className='iconbuscar' />
                </Link>
              </form>
            </div>

            <div className='col-lg-4 pt-2 col-2  d-flex flex-md-row flex-column'>
              <a href='/' className='px-3 py-2 aicon'>
                <AiOutlineShoppingCart className='icon' />
              </a>
              <a href='/' className='px-3 py-2 aicon d-none d-md-block'>
                <AiOutlineUser className='icon'></AiOutlineUser>
              </a>
              <button href='/' className='d-none d-md-block btnhead'>
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Header
