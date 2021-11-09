import React from 'react';
//Router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Style 
import { GlobalStyle } from './GlobalStyle';

//Components
import Header  from './components/Header';
import Home from './components/Home'
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';

//Context
import UseProvider from './context';

const App = () =>  (
    <Router>
      <UseProvider>

        <Header />
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        
        <GlobalStyle />

      </UseProvider>
    </Router>
  );

export default App;
