import React from "react"
import {BrowserRouter,Routes,Route,Navigate,Link} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Landing from "./pages/Landing"
import './App.css';

function Logout(){
  localStorage.clear()
  return <Navigate to ="/login"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" 
        element = {
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>}/>

        <Route path="/login" element= {<Login/>}/>
        <Route path="/logout" element= {<Logout/>}/>
        <Route path="/" element= {<Landing/>}/>
        <Route path="/register" element={<RegisterAndLogout/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
