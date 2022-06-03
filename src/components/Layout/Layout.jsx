import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from '../Router/Router'
import Sidebar from '../Sidebar'
import TopNav from '../TopNav'
import './Layout.css'
import themeAction from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const Layout = () => {
  const themeReducer = useSelector((state) => state.themeReducer)
  const dispatch = useDispatch()
  useEffect (() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

    dispatch(themeAction.setMode(themeClass))

    dispatch(themeAction.setColor(colorClass))
  }, [dispatch])

  return (
    <BrowserRouter>
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar />
            <div className='layout__content'>
              <TopNav />
              <div className='layout__content-main'>
                <Router />
              </div>
            </div>
          </div>
    </BrowserRouter>
  )
}

export default Layout
