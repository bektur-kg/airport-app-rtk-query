import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom"
import Main from "./pages/Main/Main"
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import AirportDetail from "./pages/AirportDetail/AirportDetail"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Register/>}/>
      <Route path="/airport-detail/:id" element={<AirportDetail/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/favorites" element={<h1>private</h1>}/>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}

export default App;
