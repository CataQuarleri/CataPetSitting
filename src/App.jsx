import Navbar from './components/Navbar/Navbar.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Home from './pages/Home/Home.jsx'
import './App.css'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      {/* <Route path="/login" element={<LogIn/>}/> */} 
      {/* <Route path="/signup" element={<SignUp/>}/> */}
    </Routes>
      </>
  )
}

export default App
