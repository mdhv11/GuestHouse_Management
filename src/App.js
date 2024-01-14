import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/Hotels/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Hotel/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
