import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Navbar";
import Home from "./components/Home";
import Login from "./components/Login"
import Axios from "axios";
import About from "./components/About";
import Work from "./components/Work";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />      
          <Route path="/work" element={<Work />} />          
    
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);