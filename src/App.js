import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/Hotels/Hotel';
import GuestHouse from './pages/guest-house/Guest-house';
import Register from './pages/Register/register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Hotel" element={<Hotel/>}/>
        <Route path="/guest-house" element={<GuestHouse/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
