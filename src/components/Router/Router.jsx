import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomersPage, DashboardPage } from '../../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage/>} />
        <Route path='/customers' element={<CustomersPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
