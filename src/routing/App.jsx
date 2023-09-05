import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import NavigationBar from './NavigationBar';
import Blog from './Blog';
import SingleBlog from './SingleBlog';
import Contat from './Contat';

function App() {
  return (
    <div>This is app page
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
    <Route path='/about-page' element={<About/>}></Route>
    <Route path='/blog-page' element={<Blog/>}></Route>
    <Route path='/contact-page' element={<Contat/>}></Route>
    <Route path='/single-blog-page' element={<SingleBlog/>}></Route>
   
    
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;