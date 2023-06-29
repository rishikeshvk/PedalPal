import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RentalBicycle from './pages/RentalBicycle'
import 'antd/dist/reset.css';
import UserRentals from './pages/UserRentals'
import AddBicycle from './pages/AddBicycle'
import EditBicycle from './pages/EditBicycle'
import AdminHome from './pages/AdminHome'
import { ProtectedRoute } from './ProtectedRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute />} >
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/rental/:bicycleid" element={<ProtectedRoute />} >
            <Route exact path="/rental/:bicycleid" element={<RentalBicycle />} />
          </Route>
          <Route exact path="/userrentals" element={<ProtectedRoute />} >
            <Route exact path="/userrentals" element={<UserRentals />} />
          </Route>
          <Route exact path="/addbicycle" element={<ProtectedRoute />} >
            <Route exact path="/addbicycle" element={<AddBicycle />} />
          </Route>
          <Route exact path="/editbicycle/:bicycleid" element={<ProtectedRoute />} >
            <Route exact path="/editbicycle/:bicycleid" element={<EditBicycle />} />
          </Route>
          <Route exact path="/admin" element={<ProtectedRoute />} >
            <Route exact path="/admin" element={<AdminHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;