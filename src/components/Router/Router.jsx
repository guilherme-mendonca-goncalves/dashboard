import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CustomersPage, DashboardPage } from '../../pages';

const Router = () => {
  return (
      <Routes>
        <Route path='/' element={<DashboardPage/>} />
        <Route path='/customers' element={<CustomersPage/>} />
      </Routes>
  )
}

export default Router
