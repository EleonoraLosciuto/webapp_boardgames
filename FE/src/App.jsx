// Styles
import './App.css';

// UseState / Routing
import { useState } from 'react';
import { Route, Routes } from 'react-router';

// Layout
import DefaultLayout from './layouts/DefaultLayout'

// Pages
import Homepage from './pages/Homepage';
import GameDetail from './pages/GameDetail';
import News from './pages/News';

const App = () => (
  <Routes>
    <Route Component={DefaultLayout}>
      <Route path="/" Component={Homepage} />
      <Route path="/:id" Component={GameDetail} />
      <Route path="/news" Component={News} />
    </Route>
  </Routes>

)

export default App
