import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from '../Router/Router'
import Sidebar from '../Sidebar'
import './Layout.css'


const Layout = () => {
  return (
    <BrowserRouter>
          <div className='layout'>
            <Sidebar/>
            <div className='layout__content'>
              <div className='layout__content-main'>
                <Router />
              </div>
            </div>
          </div>
    </BrowserRouter>
  )
}

export default Layout
