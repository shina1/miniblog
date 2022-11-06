import React ,{useState}from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/HeaderComp';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import Home from './pages/Home/Home';
import ReadABlog from './pages/ViewBlog/ReadABlog';
import { blogMenuData } from './utils/blogData';

function App() {
 
  return (
  <>
  <BrowserRouter>
  <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/create' element={<CreateBlog />} />
          <Route path='/blog/:id' element={<ReadABlog />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
