import React from 'react';
import './App.css'
import Navbar from './components/header/Navbar'
import Searchbar from './components/header/searchbar'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div>
    <BrowserRouter>
     <Navbar />
     <Searchbar/>
     </BrowserRouter>
    </div>
  );
}

export default App;
