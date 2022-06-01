import './global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Bar from './components/Bar/Bar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Store from './pages/Store/Store';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Bar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/store' element={<Store/>}/>
      </Routes>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
