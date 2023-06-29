import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Rental from './pages/Rental'
import 'antd/dist/reset.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/rental" element={<Rental />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
