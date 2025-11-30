import { Route, Routes } from "react-router";
import Login from "../pages/login/login";
import Register from "../pages/Register/Register";
const AppRouting = () => {
  return (
    <div>
      <Routes>  
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default AppRouting