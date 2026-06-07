import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNtFound from "./pages/PageNtFound.jsx";
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import User from './pages/user';
import UserDetails from './pages/UserDetails';
import Admin from './pages/Admin';
import Freelancer from './pages/Freelancer';
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="*" element={<PageNtFound />} />
      </Routes>
    </>
  )
}

export default App
