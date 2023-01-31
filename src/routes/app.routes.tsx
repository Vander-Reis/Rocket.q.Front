import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from '../pages/Register';
import { Room } from "../pages/Room";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/room/:id" element={<Room/>}/>
    </Routes>
  )
}