import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNtFound from "./pages/PageNtFound.jsx";
import Navbar from './Components/Navbar';
import Login from './pages/Login';
function App() {
  
  return (
    <>
          <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<PageNtFound/>}/>

      </Routes>
    </>
  )
}

export default App
