import './global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Bar from './components/Bar/Bar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Store from './pages/Store/Store';
import Newsletter from './components/Newsletter/Newsletter';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Hamburger from './components/Hamburger/Hamburger';
import { useState } from 'react';

function App() {
  const [ active, setActive ] = useState(false);

  return (
    <BrowserRouter>
      <Navbar active={active} setActive={setActive}/>
      <Sidebar active={active} setActive={setActive}/>
      <Bar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/store' element={<Store/>}/>
        <Route exact path='/product/:id' element={<Product/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
      <Newsletter/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
