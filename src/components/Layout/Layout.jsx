import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Router from '../Router/Router'
import Sidebar from '../Sidebar'


const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route render={(props) => (
          <div className='layout'>
            <Sidebar {...props} />
            <div className='layout__content'>
              <div className='layout__content-main'>
                <Router />
              </div>
            </div>
          </div>
        )}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout
