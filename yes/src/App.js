import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './page/Main';
import { Header } from './page/Header';
import Test from './component/Test';
import Footer from './page/Footer';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/test' element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
