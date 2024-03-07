import React from 'react';
import {Routes , Route} from "react-router-dom"
import DashBoard from './layout/DashBoard';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Routes>
          <Route   path='/' element={<DashBoard/>}>
              <Route index element={<HomePage/>} />
          </Route>
      </Routes>
    </>
  )
}

export default App