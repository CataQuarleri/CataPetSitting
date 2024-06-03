import Navbar from './components/Navbar/Navbar.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {useAuthStore} from './stores/authStore.js'
import { useEffect } from 'react'
import {auth} from './auth/firebase.js'

function App() {
const {user, authIsReady, initialLoad} = useAuthStore()
  useEffect(()=>{
    let unsub=  auth.onAuthStateChanged((user)=>{
        console.log("authentication", user)
        initialLoad(user)
        // axios.defaults.headers.common['Authorization'] = `Bearer ${user.accessToken}`;
        // setUserAuth({authIsReady:true,user:user})
        unsub()
      })
      
     },[])
  return (
    <>
    {authIsReady && 
      <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home user={user}/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
     {user ? "" : <Route path="/clientportal/My Portal" element={<Login/>}/> }
      <Route path="/clientportal/New Client" element={<SignUp/>}/>
    </Routes>
      </>
    }
    </>
  )
}

export default App
